import "../styles/global.css";

export const metadata = {
  title: "Varanasi tours",
  description: "Website for varanasi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
        <script
          src="https://kit.fontawesome.com/a31bdd6d95.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
