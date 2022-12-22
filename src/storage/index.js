export const saveTheme = (theme) => {
  localStorage.setItem('S3-theme', theme);
}

export const getTheme = () => {
  const theme = localStorage.getItem("S3-theme");

  return theme || 'light'
}