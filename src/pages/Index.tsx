import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const technologies = [
    { name: "Maltego", icon: "Network" },
    { name: "Spiderfoot", icon: "Globe" },
    { name: "Phoneinfoga", icon: "Phone" },
    { name: "Sherlock", icon: "Search" },
    { name: "Maigret", icon: "Users" },
    { name: "theHarvester", icon: "Mail" },
    { name: "hunter.io", icon: "Target" },
    { name: "Recon-ng", icon: "Database" },
    { name: "osintgram", icon: "Instagram" },
    { name: "Shodan", icon: "Server" },
    { name: "Censys", icon: "Shield" },
    { name: "ZoomEye", icon: "Eye" },
    { name: "Wayback Machine", icon: "Clock" },
    { name: "Datasploit", icon: "Layers" },
    { name: "IntelX", icon: "Brain" },
    { name: "Truecaller", icon: "PhoneCall" },
    { name: "Passivetotal", icon: "Activity" },
    { name: "Domaintools", icon: "Globe2" },
    { name: "Nmap", icon: "Radar" },
    { name: "FOFA", icon: "Scan" },
    { name: "Telegago", icon: "Send" },
    { name: "Exitfool", icon: "Unlock" },
    { name: "Google Lens", icon: "Camera" },
    { name: "Yandex Images", icon: "Image" },
    { name: "Opencorporates", icon: "Building" },
    { name: "Rusprofile", icon: "Building2" },
    { name: "ORBIS/SPARK", icon: "Briefcase" },
    { name: "DarkOwl", icon: "Moon" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-6 animate-fade-in">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
            Maniacitive
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            hellcitiv • fxckid • spy
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Создаю современные веб-приложения с фокусом на UX и производительность
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
            <Icon name="User" size={40} className="text-primary" />
            Обо мне
          </h2>
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Приветствую, мой псевдоним — <span className="text-primary font-semibold">hellcitiv</span>. Я специализируюсь в разведывательной дисциплине Open Source Intelligence, также в сборе персональных и прочих информации о разных личностях, инфраструктурах, компаниях.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Мой OSINT стек состоит из таких инструментов как: Maltego, Spiderfoot, Phoneinfoga, Sherlock, Maigret, Holehe, theHarvester, John, hunter.io, Recon-ng, tracker, vkhistoryrobot, telelog, findHomo, dorkleak, Ihavebeenpwned, osintgram и т/д.
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-primary">Мои услуги</h3>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg border border-border">
                <p className="text-foreground/90 mb-2">
                  <span className="font-semibold text-primary">Сбор информации о ком-то</span>
                </p>
                <p className="text-muted-foreground">Стоимость: от $30 до $100</p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg border border-border">
                <p className="text-foreground/90 mb-2">
                  <span className="font-semibold text-primary">Сбор информации о инфраструктуре</span>
                </p>
                <p className="text-muted-foreground">Стоимость: от $50 до $200</p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg border border-border">
                <p className="text-foreground/90 mb-2">
                  <span className="font-semibold text-primary">Урок по анонимизации в интернете</span>
                </p>
                <p className="text-muted-foreground">Как оставаться максимально невидимым, без следов — $12</p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg border border-border">
                <p className="text-foreground/90 mb-2">
                  <span className="font-semibold text-primary">OSINT-курс, обучение профессиональное</span>
                </p>
                <p className="text-muted-foreground mb-2">
                  Научитесь использовать профессиональные инструменты, такие как: Maltego, Spiderfoot. 
                  Обучение сбору информации, аналитике, поведенческому анализу, как совмещать разбросанные следы в один граф и найти что нужно.
                </p>
                <p className="text-muted-foreground">Стоимость: $70</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <Icon name="Boxes" size={40} className="text-primary" />
            OSINT стек
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {technologies.map((tech) => (
              <Card
                key={tech.name}
                className="p-4 bg-card border-border hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon name={tech.icon} size={24} className="text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm text-center">{tech.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;