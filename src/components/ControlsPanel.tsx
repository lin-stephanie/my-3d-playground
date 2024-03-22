import { useEffect } from 'react'
import { folder, useControls } from 'leva'
import { useStore } from '@/stores'

import { alControls } from '@/configs/components/ambientLight'
import { dlControls } from '@/configs/components/directionalLight'
import { slControls } from '@/configs/components/movingSpotlights'
import { bwControls } from '@/configs/components/backgroundWall'
import { pfControls } from '@/configs/components/photoFrame'
import { bControls } from '@/configs/components/balloons'

import type { useControlsReturn } from '@/types/controls'
import type { FolderParams, CompControls } from '@/types/controls'

const folderSettings: FolderParams[1] = {
  collapsed: true,
}

const compControls: CompControls = {
  'Ambient Light': folder(alControls, folderSettings),
  'Directional Light': folder(dlControls, folderSettings),
  'Moving Spot Lights': folder(slControls, folderSettings),
  'Background Wall': folder(bwControls, folderSettings),
  'Photo Frame': folder(pfControls, folderSettings),
  'Ballons': folder(bControls, folderSettings),
}

interface ControlsPanelProps {
  onControlsChange: (controls: useControlsReturn) => void
}

const ControlsPanel = ({ onControlsChange }: ControlsPanelProps) => {
  /* theme control */
  const theme = useStore.use.theme()
  const setThemeConfig = useStore.use.setThemeConfig()
  const [, set] = useControls(() => ({
    General: folder(
      {
        Theme: {
          value: theme,
          options: ['light', 'dark', 'system'],
          onChange: (value) => {
            setThemeConfig(value)
          },
        },
      },
      {
        collapsed: true,
        order: 0,
      }
    ),
  }))
  // @ts-expect-error (for Object literal may only specify known properties, and 'Theme' does not exist in type '{ General?: FolderInput<unknown> | undefined; }'.ts(2353))
  useEffect(() => set({ Theme: theme }), [theme, set])

  /* component control */
  const controls = useControls(compControls)
  useEffect(() => onControlsChange(controls), [controls, onControlsChange])

  return null
}

export default ControlsPanel
