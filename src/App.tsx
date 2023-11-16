import { PasswordProvider } from "contexts";
import { PasswordGenerator } from "components";

const App = () => {
  return (
    <PasswordProvider>
      <PasswordGenerator />
    </PasswordProvider>
  );
};

export default App;
