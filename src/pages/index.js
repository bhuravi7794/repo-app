import Header from './component/Header';
import Content from './component/Content';
export default function Home() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Header />
      <Content />
    </div>
  );
}
