import React from 'react'
import { Button } from '@/registry/axiomite-ui/button'

const ButtonPreview = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10">
        <Button variant={"default"}>
           Default Button
        </Button>
        <Button variant={"secondary"}>
            Secondary Button
        </Button>
        <Button variant={'destructive'}>
            Danger Button
        </Button>
        <Button variant={"link"}>
           Link Button
        </Button>
        <Button variant={"outline"}>
            Outline Button
        </Button>
        <Button variant={'ghost'}>
            Ghost Button
        </Button>
    </div>
  )
}

export default ButtonPreview