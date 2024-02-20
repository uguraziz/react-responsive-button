import ButtonGroups from "./components/button-groups";

function App() {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Hoşgeldin</h3>
        <nav className="flex gap-2.5">
          <ButtonGroups
            autoClose={true}
            buttons={[
              {
                title: "Yeni Ekle",
                attributes: {
                  size: "small",
                  onClick: () => alert("Yeni Ekle Btn"),
                },
              },
              {
                title: "Profil",
                attributes: {
                  size: "medium",
                  variant: "primary",
                },
              },
              {
                title: "Ayarlar",
                attributes: {
                  size: "large",
                  variant: "warning",
                },
              },
              {
                title: "Çıkış Yap",
                attributes: {
                  size: "small",
                  variant: "danger",
                },
              },
            ]}
          />
        </nav>
      </header>
    </div>
  );
}

export default App;
