import { useEffect, useRef, useState, type ReactNode } from 'react'
import Button from './components/ui/Button/index.tsx'
import ColorSelector from './components/ui/ColorSelector/index.tsx'
import { CHROME_COLOR, DEFAULT_PRIMARY } from './components/ui/ColorSelector/color.ts'
import Container from './components/ui/Container/index.tsx'
import { IMAGE_TYPES } from './components/ui/FileUpload/files.ts'
import FileUpload from './components/ui/FileUpload/index.tsx'
import { FONTS, type FontName } from './components/ui/FontSelector/fonts.ts'
import FontSelector from './components/ui/FontSelector/index.tsx'
import InputField from './components/ui/InputField/index.tsx'
import ThemePreference from './components/ui/ThemePreference/index.tsx'

const MAX_LOGO_BYTES = 2 * 1024 * 1024

interface Settings {
  legalName: string
  displayName: string
  sidebarBrandName: string
  poweredByText: string
  logoFile: File | null
  logoError: string | null
  primaryText: string
  primaryColor: string
  font: FontName
  darkMode: boolean
  compactMode: boolean
}

const startSettings = (): Settings => ({
  legalName: '',
  displayName: '',
  sidebarBrandName: '',
  poweredByText: '',
  logoFile: null,
  logoError: null,
  primaryText: DEFAULT_PRIMARY,
  primaryColor: DEFAULT_PRIMARY,
  font: FONTS[0],
  darkMode: false,
  compactMode: false,
})

const Icon = ({
  size,
  children,
}: {
  size: number
  children: ReactNode
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    {children}
  </svg>
)

const PaletteIcon = () => (
  <Icon size={20}>
    <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h.5A4.5 4.5 0 0 0 12 3Z" />
    <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="9.5" cy="7.5" r="1" fill="currentColor" />
    <circle cx="13.5" cy="7.5" r="1" fill="currentColor" />
  </Icon>
)

const TextIcon = () => (
  <Icon size={20}>
    <path d="M4 6h16M12 6v12M8 18h8" />
  </Icon>
)

const EyeIcon = () => (
  <Icon size={20}>
    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.5" />
  </Icon>
)

const UploadIcon = () => (
  <Icon size={16}>
    <path d="M12 16V5M8 8l4-4 4 4M5 19h14" />
  </Icon>
)

function App() {
  const [settings, setSettings] = useState(startSettings)
  const [saved, setSaved] = useState(false)
  const [logoUrl, setLogoUrl] = useState<string | null>(null)
  const logoUrlRef = useRef<string | null>(null)
  const logoInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (logoUrlRef.current) URL.revokeObjectURL(logoUrlRef.current)
    }
  }, [])

  const replaceLogo = (file: File | null) => {
    if (logoUrlRef.current) URL.revokeObjectURL(logoUrlRef.current)
    const nextUrl = file ? URL.createObjectURL(file) : null
    logoUrlRef.current = nextUrl
    setLogoUrl(nextUrl)
  }

  const edit = (patch: Partial<Settings>) => {
    setSaved(false)
    setSettings((current) => {
      const unchanged = (Object.keys(patch) as (keyof Settings)[]).every((key) =>
        Object.is(current[key], patch[key]),
      )
      return unchanged ? current : { ...current, ...patch }
    })
  }

  const onLogo = (file: File) => {
    if (!IMAGE_TYPES.includes(file.type)) {
      edit({ logoError: 'This file is not an image.' })
      return
    }
    if (file.size > MAX_LOGO_BYTES) {
      edit({ logoError: 'This file is larger than 2MB.' })
      return
    }
    edit({ logoFile: file, logoError: null })
    replaceLogo(file)
  }

  return (
    <div className="flex flex-col gap-8">
      <Container
        className="w-full"
        name="Agency Identity"
        description="How your agency appears across the platform, in reports, and in communications"
      >
        <div className="mb-3 flex gap-4">
          <InputField
            className="w-1/2"
            label="Legal Name"
            value={settings.legalName}
            onChange={(legalName) => edit({ legalName })}
          />
          <InputField
            className="w-1/2"
            label="Display Name"
            value={settings.displayName}
            onChange={(displayName) => edit({ displayName })}
          />
        </div>
        <div className="flex gap-4">
          <InputField
            className="w-1/2"
            label="Sidebar Brand Name"
            value={settings.sidebarBrandName}
            onChange={(sidebarBrandName) => edit({ sidebarBrandName })}
          />
          <InputField
            className="w-1/2"
            label="Powered By Text"
            value={settings.poweredByText}
            onChange={(poweredByText) => edit({ poweredByText })}
          />
        </div>
      </Container>

      <Container
        className="w-1/2"
        name="Logo"
        description="Upload your agency logo. Used in the sidebar, PDF reports, and email templates"
      >
        <div className="flex items-start gap-4">
          <FileUpload
            fileName={settings.logoFile?.name ?? null}
            previewUrl={logoUrl}
            message={settings.logoError}
            inputRef={logoInputRef}
            onFile={onLogo}
          />
          <Button
            icon={<UploadIcon />}
            onClick={() => logoInputRef.current?.click()}
          >
            Upload Logo
          </Button>
        </div>
      </Container>

      <Container
        className="w-full"
        name="Color Theme"
        icon={<PaletteIcon />}
        description="Choose a preset or define a custom primary color. Affects buttons, links, badges, and accents across the platform"
      >
        <ColorSelector
          text={settings.primaryText}
          color={settings.primaryColor}
          onChange={({ text, color }) =>
            edit({ primaryText: text, primaryColor: color })
          }
        />
      </Container>

      <Container
        name="Typography"
        icon={<TextIcon />}
        description="Font family used across the platform UI"
      >
        <FontSelector
          value={settings.font}
          onChange={(font) => edit({ font })}
        />
      </Container>

      <Container name="Display Preferences" icon={<EyeIcon />}>
        <ThemePreference
          darkMode={settings.darkMode}
          compactMode={settings.compactMode}
          onDarkModeChange={(darkMode) => edit({ darkMode })}
          onCompactModeChange={(compactMode) => edit({ compactMode })}
        />
      </Container>

      <div className="flex w-1/4 flex-col gap-2">
        <Button
          style={{ backgroundColor: CHROME_COLOR, color: 'white' }}
          onClick={() => setSaved(true)}
        >
          Save branding changes
        </Button>
        {saved ? <p className="text-sm">Saved</p> : null}
        <Button
          className="border border-neutral-300"
          style={{ backgroundColor: 'white', color: CHROME_COLOR }}
          onClick={() => {
            replaceLogo(null)
            edit(startSettings())
          }}
        >
          Reset to Defaults
        </Button>
      </div>
    </div>
  )
}

export default App
