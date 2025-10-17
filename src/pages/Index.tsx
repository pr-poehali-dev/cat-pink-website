import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const fandoms = [
    { name: "My Dress-Up Darling", image: "https://cdn.poehali.dev/files/451b75bd-bdaf-4235-803b-ab621c08f3bd.jpg" },
    { name: "lololowka", image: "https://cdn.poehali.dev/files/ef143f9f-7f23-4ad0-8552-00d1a9511754.jpg" },
    { name: "squid game", image: "https://cdn.poehali.dev/files/ed523eb1-9437-42e9-b933-138984d6d306.jpg" },
    { name: "bang dream", image: "https://cdn.poehali.dev/files/de22c29e-ec63-463b-ba66-9a4f724ccdf5.jpg" },
    { name: "genshin impact", image: "https://cdn.poehali.dev/files/d262a722-fa9d-4d7e-b2b7-f50b05f6c205.jpg" },

    { name: "crk", image: "https://cdn.poehali.dev/files/4e052af9-a54b-45da-b78f-2dbb875bbb61.jpg" },
    { name: "mouthwashing", image: "https://cdn.poehali.dev/files/2a5f0e27-26a0-4bec-8e47-16bae66e0073.jpg" },
    { name: "nuc", image: "https://cdn.poehali.dev/files/d02cfdbf-29cc-4411-823a-925becf3161e.jpg" },
    { name: "mlp", image: "https://cdn.poehali.dev/files/bc985f5c-b18f-4409-8db6-7fa448a004e7.jpg" },
    { name: "dungeon meshi", image: "https://cdn.poehali.dev/files/44502990-e7c1-4fa5-987b-c37da9ef5aae.jpg" },
    { name: "kimetsu no yaiba", image: "https://cdn.poehali.dev/files/1f56942d-5607-464c-910b-a936b52b2387.jpg" },
    { name: "dandadan", image: "https://cdn.poehali.dev/files/91e6a5fb-bc30-4173-b16e-9d2a68dafca8.jpg" }
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

  const music = [
    "Мэйби Бэйби",
    "Дора",
    "Kill Eva",
    "Staple R",
    "Underoath",
    "ЛСП(немного...)"
  ];

  const friends = [
    "дурак",
    "саша",
    "зажичка",
    "БРО",
    "дина",
    "лина",
    "вормя",
    "фура",
    "аня",
    "любавочка"
  ];

  const catStickers = [
    { url: "https://cdn.poehali.dev/files/2e651a97-32f6-4526-9818-8430b04b93ee.jpg", rotation: -8 },
    { url: "https://cdn.poehali.dev/files/a5fa6fac-49ca-415f-835b-66b269461a30.jpg", rotation: 12 },
    { url: "https://cdn.poehali.dev/files/0e1f794a-50cb-4c90-9a22-4b957e69b02d.jpg", rotation: -5 },
    { url: "https://cdn.poehali.dev/files/9c9bab94-befe-4b18-b378-1a8a83c0a107.jpg", rotation: 15 },
    { url: "https://cdn.poehali.dev/files/661e930a-0f58-4e78-bbc9-8bc9fe0a6af8.jpg", rotation: -10 }
  ];

  const cuteStickers = [
    { url: "https://cdn.poehali.dev/files/df1be0f4-5cd4-43db-a9fa-f0b5cf949f95.jpg", rotation: 6 },
    { url: "https://cdn.poehali.dev/files/3c75cdf2-49a0-4351-8f3d-a83919de7fbf.jpg", rotation: -12 },
    { url: "https://cdn.poehali.dev/files/cb9c428c-a62f-4a37-987b-5e4022da9657.jpg", rotation: 8 },
    { url: "https://cdn.poehali.dev/files/4492560d-ce60-4183-9acc-d72575f34c6b.jpg", rotation: -6 }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 decorative-border relative overflow-hidden">
      <div className="fixed inset-0 animate-gradient pointer-events-none z-0"></div>
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="petal"></div>
        ))}
      </div>
      <div className="relative z-10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-gradient flex-shrink-0">•</h1>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide flex-1">
              {["about", "hobbies", "fandoms", "manhwas", "music", "friends", "dni"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors capitalize whitespace-nowrap flex-shrink-0"
                >
                  {section === "about" ? "Обо мне" : 
                   section === "hobbies" ? "Увлечения" :
                   section === "fandoms" ? "Фандомы" : 
                   section === "manhwas" ? "Манхвы" : 
                   section === "music" ? "Музыка" : 
                   section === "friends" ? "Друзья" : "DNI"}
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
                    <h3 className="text-2xl font-semibold text-pink-700">Лиса/Алиса/лися</h3>
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

      <div className="absolute left-4 md:left-8 top-40 z-20">
        <img 
          src={catStickers[0].url}
          alt="cat sticker"
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-2xl border-4 border-white shadow-md"
          style={{ transform: `rotate(${catStickers[0].rotation}deg)` }}
        />
      </div>

      <div className="absolute right-4 md:right-12 top-[500px] z-20">
        <img 
          src={catStickers[1].url}
          alt="cat sticker"
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl border-4 border-white shadow-md"
          style={{ transform: `rotate(${catStickers[1].rotation}deg)` }}
        />
      </div>

      <div className="absolute left-4 md:left-16 top-[900px] z-20">
        <img 
          src={catStickers[2].url}
          alt="cat sticker"
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-2xl border-4 border-white shadow-md"
          style={{ transform: `rotate(${catStickers[2].rotation}deg)` }}
        />
      </div>

      <div className="absolute right-4 md:right-8 top-[1300px] z-20">
        <img 
          src={catStickers[3].url}
          alt="cat sticker"
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl border-4 border-white shadow-md"
          style={{ transform: `rotate(${catStickers[3].rotation}deg)` }}
        />
      </div>

      <div className="absolute left-4 md:left-10 top-[1700px] z-20">
        <img 
          src={catStickers[4].url}
          alt="cat sticker"
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-2xl border-4 border-white shadow-md"
          style={{ transform: `rotate(${catStickers[4].rotation}deg)` }}
        />
      </div>

      <div className="absolute right-8 md:right-16 top-[350px] z-20">
        <img 
          src={cuteStickers[0].url}
          alt="cute sticker"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
          style={{ transform: `rotate(${cuteStickers[0].rotation}deg)` }}
        />
      </div>

      <div className="absolute left-8 md:left-20 top-[650px] z-20">
        <img 
          src={cuteStickers[1].url}
          alt="cute sticker"
          className="w-14 h-14 md:w-16 md:h-16 object-contain"
          style={{ transform: `rotate(${cuteStickers[1].rotation}deg)` }}
        />
      </div>

      <div className="absolute right-6 md:right-10 top-[1100px] z-20">
        <img 
          src={cuteStickers[2].url}
          alt="cute sticker"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
          style={{ transform: `rotate(${cuteStickers[2].rotation}deg)` }}
        />
      </div>

      <div className="absolute left-12 md:left-24 top-[1500px] z-20">
        <img 
          src={cuteStickers[3].url}
          alt="cute sticker"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
          style={{ transform: `rotate(${cuteStickers[3].rotation}deg)` }}
        />
      </div>

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
            <p className="text-gray-600 text-lg">etc. . .</p>
          </div>
        </div>
      </section>

      <section id="manhwas" className="py-20 px-4 pb-32">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl font-bold text-center mb-8 text-gradient">Любимые манхвы </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">♥ — самые любимые</p>
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

      <section id="music" className="py-20 px-4 bg-white/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">Любимая музыка</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {music.map((artist, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-cyan-100 to-purple-50 border-2 border-cyan-200 rounded-3xl hover:scale-105 transition-transform shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Icon name="Music" className="text-cyan-500" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">{artist}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="friends" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-8 text-gradient">Друзяшки мои любимые обожаю ихх!</h2>
          <Card className="p-8 bg-gradient-to-br from-pink-100 to-purple-50 border-2 border-pink-300 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {friends.map((friend, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white/80 rounded-full border-2 border-pink-300 shadow-md hover:scale-110 transition-transform"
                >
                  <span className="text-lg font-semibold text-pink-700">{friend}</span>
                </div>
              ))}
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl text-gray-700">Я вас всех очень сильно люблю,</p>
              <p className="text-xl text-gray-700">пишите мне почаще, а то я иногда скучаю</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="dni" className="py-20 px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-6xl font-bold text-center mb-12 text-gradient">DNI </h2>
          <Card className="p-8 bg-white/80 backdrop-blur border-2 border-red-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-pink-300">
                  <Icon name="X" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-600">Антисы</h3>
                  <p className="text-gray-700"></p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-red-200 via-pink-200 to-red-200"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-pink-300">
                  <Icon name="X" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-600">Считаете, что дружба строится только на фандомах</h3>
                  <p className="text-gray-700"></p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-red-200 via-pink-200 to-red-200"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-pink-300">
                  <Icon name="X" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-600">Не цените дружбу</h3>
                  <p className="text-gray-700"></p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 py-3 text-white mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Send" className="text-white" size={20} />
            <a href="https://t.me/lilbroBBQ" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
              @lilbroBBQ
            </a>
          </div>
          <p className="text-sm">мой тгк: @lililibabyQ</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;