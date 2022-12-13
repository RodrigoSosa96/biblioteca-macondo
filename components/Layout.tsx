import Head from "next/head";
import Header from "./Header";

interface ILayout {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ children, title }: ILayout) {
  const pageTitle = title ? `Macondo | ${title}` : "Macondo | Una librería escondida";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Librería Macondo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-xlg m-auto flex flex-col align-middle">{children}</main>
    </>
  );
} 