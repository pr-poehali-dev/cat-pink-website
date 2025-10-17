import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const fandoms = [
    { name: "My Dress-Up Darling", image: "https://cdn.poehali.dev/projects/291d8774-6549-4504-8d90-7da9022fb3e9/files/af1d060d-a671-432a-b36d-25783e084cba.jpg" },
    { name: "lololowka", image: "https://cdn.poehali.dev/files/3a0bdc86-f36d-4017-a217-0d6b4d7ee7cc.jpg" },
    { name: "squid game", image: "https://cdn.poehali.dev/files/ed523eb1-9437-42e9-b933-138984d6d306.jpg" },
    { name: "bang dream", image: "https://cdn.poehali.dev/files/2a048e94-5f85-4c5d-ac35-3694cc240d6f.jpg" },
    { name: "genshin", image: "https://cdn.poehali.dev/projects/291d8774-6549-4504-8d90-7da9022fb3e9/files/d1a8d74c-be2a-4f6f-9f8d-3253fdef39ff.jpg" },
    { name: "hsr", image: "https://cdn.poehali.dev/files/3a0bdc86-f36d-4017-a217-0d6b4d7ee7cc.jpg" },
    { name: "crk", image: "https://cdn.poehali.dev/files/2a048e94-5f85-4c5d-ac35-3694cc240d6f.jpg" },
    { name: "mouthwashing", image: "https://cdn.poehali.dev/files/3a0bdc86-f36d-4017-a217-0d6b4d7ee7cc.jpg" },
    { name: "nuc", image: "https://cdn.poehali.dev/files/2a048e94-5f85-4c5d-ac35-3694cc240d6f.jpg" },
    { name: "mlp", image: "https://cdn.poehali.dev/files/3a0bdc86-f36d-4017-a217-0d6b4d7ee7cc.jpg" },
    { name: "dungeon meshi", image: "https://cdn.poehali.dev/files/2a048e94-5f85-4c5d-ac35-3694cc240d6f.jpg" },
    { name: "kimetsu no yaiba", image: "https://cdn.poehali.dev/files/3a0bdc86-f36d-4017-a217-0d6b4d7ee7cc.jpg" },
    { name: "dandadan", image: "https://cdn.poehali.dev/files/2a048e94-5f85-4c5d-ac35-3694cc240d6f.jpg" }
  ];

  const manhwas = [
    { title: "ночь у берега", fav: false },
    { title: "джинкс", fav: false },
    { title: "ночные этюды", fav: false },
    { title: "прелести садизма", fav: true },
    { title: "поменяться местами", fav: true },
    { title: "я отработаю по полной", fav: true },
    { title: "остерегайся полнолуния в марте", fav: true },
    { title: "слышно даже без микрофона", fav: true },
    { title: "ферма господина А", fav: true },
    { title: "парень ракушка", fav: false },
    { title: "bj алекс", fav: false },
    { title: "нам нельзя", fav: false },
    { title: "потерянный и невинный", fav: false },
    { title: "золотая пара", fav: true },
    { title: "определение взаимоотношений", fav: true },
    { title: "проект ботаник", fav: false }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 decorative-border">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gradient">•••</h1>
            <div className="flex gap-6">
              {["about", "hobbies", "fandoms", "manhwas"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors capitalize"
                >
                  {section === "about" ? "Обо мне" : 
                   section === "hobbies" ? "Увлечения" :
                   section === "fandoms" ? "Фандомы" : "Манхвы"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl text-pink-400 animate-bounce-slow">♡</div>
        <div className="absolute top-40 right-20 text-5xl text-purple-400 animate-float">✿</div>
        <div className="absolute bottom-20 left-1/4 text-4xl text-cyan-400 animate-pulse-slow">✧</div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/3a0bdc86-f36d-4017-a217-0d6b4d7ee7cc.jpg"
                alt="Marin Kitagawa"
                className="rounded-3xl shadow-2xl border-4 border-pink-300 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-7xl font-bold text-gradient leading-tight text-center">real peak me</h2>
              <div className="flex gap-3 flex-wrap">
                <Badge className="bg-pink-400 text-white text-lg px-4 py-2"></Badge>
                <Badge className="bg-purple-400 text-white text-lg px-4 py-2"></Badge>
                <Badge className="bg-cyan-400 text-white text-lg px-4 py-2"></Badge>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-center">хай ! :ь</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">Обо мне </h2>
          <Card className="p-8 bg-white/80 backdrop-blur border-2 border-pink-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://cdn.poehali.dev/files/2a048e94-5f85-4c5d-ac35-3694cc240d6f.jpg"
                alt="Marin aesthetic"
                className="rounded-2xl shadow-lg border-2 border-pink-200"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="User" className="text-pink-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-semibold text-pink-700">Лиса</h3>
                    <p className="text-gray-600">17 y.o., cisgirl, peak me</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200"></div>
                <p className="text-gray-700 leading-relaxed text-center">пикми изгой нншка какая-то✿</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="hobbies" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">Увлечения </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-200 rounded-3xl hover:scale-105 transition-transform shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-pink-400 flex items-center justify-center">
                  <Icon name="Palette" className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-pink-700">Рисование</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">неистово херачу арты</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-100 to-purple-50 border-2 border-purple-200 rounded-3xl hover:scale-105 transition-transform shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center">
                  <Icon name="PenTool" className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-purple-700">Персонажи</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">какая-то омегаверсная херня...</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="fandoms" className="py-20 px-4 bg-white/40">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">Мои фандомы </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {fandoms.map((fandom, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-3 border-pink-300 shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300">
                  <img 
                    src={fandom.image} 
                    alt={fandom.name}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center max-w-[100px] leading-tight">
                  {fandom.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">и многое другое! ✦</p>
          </div>
        </div>
      </section>

      <section id="manhwas" className="py-20 px-4 pb-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl font-bold text-center mb-8 text-gradient">Любимые манхвы </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            <span className="inline-block mr-2">♥</span>
            означает особенно любимые
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {manhwas.map((manhwa, index) => (
              <Card 
                key={index}
                className={`p-6 rounded-2xl hover:scale-105 transition-all cursor-pointer border-2 ${
                  manhwa.fav 
                    ? 'bg-gradient-to-br from-pink-100 to-red-50 border-pink-300 shadow-pink-200' 
                    : 'bg-white/80 border-purple-200'
                } shadow-md hover:shadow-xl`}
              >
                <div className="flex items-center gap-3">
                  <Icon 
                    name={manhwa.fav ? "Heart" : "BookOpen"} 
                    className={manhwa.fav ? "text-pink-500" : "text-purple-500"} 
                    size={24}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 flex-1">
                    {manhwa.title}
                  </h3>
                  {manhwa.fav && (
                    <span className="text-pink-500 text-xl">♥</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 py-4 text-white text-center">
        <p className="font-medium">Made with ♥ by Лиса</p>
      </footer>
    </div>
  );
};

export default Index;