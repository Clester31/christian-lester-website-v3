import SectionLayout from "./components/SectionLayout";
import { UseAppContext } from "./context/Context";

export default function App() {
  const { section } = UseAppContext();
  return (
    <div className="main-content flex grow w-screen">
      <SectionLayout title={section.sectionTitle} subtitle={section.sectionDescription}>
        {
          section.sectionComponent
        }
      </SectionLayout>
    </div>
  )
}