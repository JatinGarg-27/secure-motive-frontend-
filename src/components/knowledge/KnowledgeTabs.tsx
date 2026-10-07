import { useRef } from 'react'
import type { KeyboardEvent } from 'react'
import Container from '@/components/common/Container'
import { cn } from '@/utils/helpers'
import { KNOWLEDGE_TABS, tabButtonId, tabPanelId, type KnowledgeTabId } from './tabs'

interface KnowledgeTabsProps {
  active: KnowledgeTabId
  onChange: (id: KnowledgeTabId) => void
}

/**
 * Tab bar that sticks under the header. Arrow keys move between tabs, as the
 * tabs pattern expects; only the active tab is in the tab order.
 */
export default function KnowledgeTabs({ active, onChange }: KnowledgeTabsProps) {
  const buttons = useRef<Array<HTMLButtonElement | null>>([])

  const moveWithArrows = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (step === 0) return
    event.preventDefault()
    const count = KNOWLEDGE_TABS.length
    const target = (index + step + count) % count
    const tab = KNOWLEDGE_TABS[target]
    if (!tab) return
    onChange(tab.id)
    buttons.current[target]?.focus()
  }

  return (
    <div className="sticky top-16 z-40 border-b border-cyber-teal/10 bg-cyber-bg/95 backdrop-blur-xs">
      <Container>
        <div role="tablist" aria-label="Knowledge Centre content" className="flex gap-1 py-2">
          {KNOWLEDGE_TABS.map((tab, index) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                ref={(element) => {
                  buttons.current[index] = element
                }}
                type="button"
                role="tab"
                id={tabButtonId(tab.id)}
                aria-selected={isActive}
                aria-controls={tabPanelId(tab.id)}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onChange(tab.id)}
                onKeyDown={(event) => moveWithArrows(event, index)}
                className={cn(
                  'cursor-pointer rounded-lg px-6 py-2.5 font-code text-xs tracking-widest uppercase transition-colors',
                  isActive ? 'bg-cyber-teal text-cyber-bg' : 'text-cyber-muted hover:text-cyber-teal',
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
