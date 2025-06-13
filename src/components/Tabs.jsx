export default function Tabs( { children,  buttons, ButtonsContainer = "menu" } ) {
  // const ButtonsContainer = buttonsContainer || 'menu'; must start with an uppercase as an arg prop. Must use "" for built in tags and {} for custom components
  return (
  <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
  </>
  );
}