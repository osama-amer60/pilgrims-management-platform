import {
  sidebarLinkLink,
  sidebarLinkIcon,
  sidebarLinkLabel,
  sidebarLinkActive,
} from './SidebarLink.styles'

export interface SidebarLinkProps {
  icon: string
  label: string
  to: string
}

export const useSidebarLink = () => {
  return {
    linkClasses: sidebarLinkLink,
    iconClasses: sidebarLinkIcon,
    labelClasses: sidebarLinkLabel,
    activeClasses: sidebarLinkActive,
  }
}
