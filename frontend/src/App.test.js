import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import persist from "./store";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockReturnValue({ environment: "dev", service: "fakeService" }),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
const persistStore = persist();
test("App component snapshot", () => {
  const component = renderer.create(
    <Provider store={persistStore.store}>
      <PersistGate persistor={persistStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
