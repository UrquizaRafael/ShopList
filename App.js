import { SQLiteProvider } from "expo-sqlite";
import Content from "./components/Content";
import { getDo } from "./persistence/db";

export default function App() {
  return (
    <SQLiteProvider
    databaseName="ShopList.db"
    onInit={getDo}>
       <Content />
    </SQLiteProvider>
     
  );
}
