import SubHeader from "@/app/_components/sub_header";
import Header from "@/app/_components/header";
import MainContent from "@/app/_components/main_content";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <SubHeader/>
      <Header />
      <MainContent />
    </main>
  );
}
