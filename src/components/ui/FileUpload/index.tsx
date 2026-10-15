import type { RefObject } from 'react'
import { IMAGE_TYPES } from './files.ts'

interface FileUploadProps {
  fileName: string | null
  previewUrl: string | null
  message: string | null
  inputRef: RefObject<HTMLInputElement | null>
  onFile: (file: File) => void
}

const FileUpload = ({
  fileName,
  previewUrl,
  message,
  inputRef,
  onFile,
}: FileUploadProps) => {
  return (
    <div className="flex flex-col gap-2">
      {previewUrl ? (
        <img
          src={previewUrl}
          alt=""
          className="h-16 w-16 rounded border border-neutral-300 object-contain"
        />
      ) : (
        <p className="text-sm">No logo</p>
      )}
      {fileName ? <p className="text-sm">{fileName}</p> : null}
      {message ? <p className="text-sm">{message}</p> : null}
      <input
        ref={inputRef}
        type="file"
        accept={IMAGE_TYPES.join(',')}
        onChange={(event) => {
          const file = event.target.files?.[0]
          event.target.value = ''
          if (file) onFile(file)
        }}
      />
    </div>
  )
}

export default FileUpload
