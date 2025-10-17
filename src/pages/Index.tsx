import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const fandoms = [
    "My Dress-Up Darling", "lololowka", "squid game (s1, s2, s3)", 
    "bang dream", "genshin", "hsr", "crk", "mouthwashing", 
    "nuc", "mlp", "dungeon meshi", "kimetsu no yaiba", "dandadan"
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gradient">Лиса</h1>
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
        <div className="absolute top-10 left-10 text-6xl animate-bounce-slow">💕</div>
        <div className="absolute top-40 right-20 text-5xl animate-float">🎀</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-pulse-slow">✨</div>
        
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
              <h2 className="text-7xl font-bold text-gradient leading-tight">
                Привет! Я Лиса 🦊
              </h2>
              <div className="flex gap-3 flex-wrap">
                <Badge className="bg-pink-400 text-white text-lg px-4 py-2">17 y.o.</Badge>
                <Badge className="bg-purple-400 text-white text-lg px-4 py-2">cisgirl</Badge>
                <Badge className="bg-cyan-400 text-white text-lg px-4 py-2">peak me</Badge>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Добро пожаловать в мой милый уголок интернета! ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">
            Обо мне 💖
          </h2>
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
                <p className="text-gray-700 leading-relaxed">
                  Живу в мире аниме, манхвы и творчества. Обожаю создавать что-то своё и погружаться в увлекательные истории! 🌸
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="hobbies" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">
            Увлечения 🎨
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-200 rounded-3xl hover:scale-105 transition-transform shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-pink-400 flex items-center justify-center text-3xl">
                  🎨
                </div>
                <h3 className="text-3xl font-bold text-pink-700">Рисование</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Люблю создавать арты и визуализировать свои идеи на бумаге и в цифре
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-100 to-purple-50 border-2 border-purple-200 rounded-3xl hover:scale-105 transition-transform shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center text-3xl">
                  ✍️
                </div>
                <h3 className="text-3xl font-bold text-purple-700">Персонажи</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Прописываю своих персонажей, создаю их истории и характеры :3
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="fandoms" className="py-20 px-4 bg-white/40">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">
            Мои фандомы 🌟
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {fandoms.map((fandom, index) => (
              <Badge 
                key={index}
                className="text-lg px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:scale-110 transition-transform cursor-pointer border-2 border-white shadow-md"
              >
                {fandom}
              </Badge>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">и многое другое! 💫</p>
          </div>
        </div>
      </section>

      <section id="manhwas" className="py-20 px-4 pb-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl font-bold text-center mb-8 text-gradient">
            Любимые манхвы 📚
          </h2>
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
        <p className="font-medium">Made with 💕 by Лиса</p>
      </footer>
    </div>
  );
};

export default Index;
