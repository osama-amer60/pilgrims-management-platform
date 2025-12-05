export const useHeaderBar = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Activities', href: '/activities' },
    { label: 'Hajj System', href: '/hajj-system' },
    { label: 'Operations' },
  ]

  const addNew = () => {
    console.log('addNew')
  }
  return {
    breadcrumbItems,
    addNew,
  }
}
