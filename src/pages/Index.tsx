import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [biomarkers, setBiomarkers] = useState({
    sleep: 7,
    exercise: 3,
    water: 2,
    stress: 5,
    nutrition: 6,
  });

  const calculateHealthScore = () => {
    const weights = { sleep: 0.25, exercise: 0.2, water: 0.15, stress: 0.2, nutrition: 0.2 };
    return Math.round(
      (biomarkers.sleep * weights.sleep +
        biomarkers.exercise * weights.exercise +
        biomarkers.water * weights.water +
        (10 - biomarkers.stress) * weights.stress +
        biomarkers.nutrition * weights.nutrition) * 10
    );
  };

  const healthScore = calculateHealthScore();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-primary/20 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Dna" className="text-primary" size={32} />
            <span className="text-2xl font-bold glow-text text-primary">BioHack</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#main" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#biohacking" className="text-foreground/80 hover:text-primary transition-colors">Биохакинг</a>
            <a href="#dna" className="text-foreground/80 hover:text-primary transition-colors">ДНК-тестирование</a>
            <a href="#calculator" className="text-foreground/80 hover:text-primary transition-colors">Калькулятор</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
            Консультация
          </Button>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 glow-text text-primary animate-fade-in">
            Оптимизируй свою жизнь
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in">
            Биохакинг нового поколения: анализ ДНК, персональные рекомендации и контроль биомаркеров
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              <Icon name="Dna" className="mr-2" size={20} />
              Начать тестирование
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="biohacking" className="py-20 px-6 gradient-bg">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Возможности биохакинга
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card border-primary/30 hover:border-primary transition-all duration-300 hover:glow-border">
              <Icon name="Brain" className="text-secondary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Когнитивное улучшение</h3>
              <p className="text-foreground/70">
                Повышение концентрации, памяти и ментальной производительности через научные методы
              </p>
            </Card>
            <Card className="p-6 bg-card border-primary/30 hover:border-primary transition-all duration-300 hover:glow-border">
              <Icon name="Activity" className="text-accent mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Физическая оптимизация</h3>
              <p className="text-foreground/70">
                Максимизация энергии, силы и выносливости на основе персональных данных
              </p>
            </Card>
            <Card className="p-6 bg-card border-primary/30 hover:border-primary transition-all duration-300 hover:glow-border">
              <Icon name="Heart" className="text-destructive mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Долголетие</h3>
              <p className="text-foreground/70">
                Замедление старения и профилактика возрастных заболеваний
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="dna" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                ДНК-тестирование
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Узнайте свои генетические предрасположенности и получите персонализированные рекомендации по питанию, тренировкам и образу жизни
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-accent mt-1" size={20} />
                  <span className="text-foreground/80">Анализ 700+ генетических маркеров</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-accent mt-1" size={20} />
                  <span className="text-foreground/80">Оценка рисков заболеваний</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-accent mt-1" size={20} />
                  <span className="text-foreground/80">Персональный план оптимизации</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-accent mt-1" size={20} />
                  <span className="text-foreground/80">Конфиденциальность данных</span>
                </li>
              </ul>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Icon name="FlaskConical" className="mr-2" size={20} />
                Заказать тест
              </Button>
            </div>
            <Card className="p-8 bg-card border-secondary/30 animate-glow-pulse">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Dna" className="text-primary" size={120} />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-6 gradient-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Калькулятор биомаркеров
          </h2>
          <p className="text-center text-foreground/70 mb-12">
            Оцените ваше текущее состояние здоровья
          </p>
          
          <Card className="p-8 bg-card border-primary/30">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-foreground">Оценка здоровья</h3>
                <div className="text-right">
                  <div className="text-5xl font-bold text-primary">{healthScore}</div>
                  <div className="text-sm text-foreground/60">из 100</div>
                </div>
              </div>
              <Progress 
                value={healthScore} 
                className="h-4 bg-muted"
              />
              <p className="text-sm text-foreground/60 mt-2">
                {healthScore >= 80 ? '🚀 Отличное состояние!' : 
                 healthScore >= 60 ? '✨ Хорошее состояние' : 
                 healthScore >= 40 ? '⚠️ Требуется внимание' : 
                 '🔴 Критический уровень'}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="flex items-center gap-2 text-foreground">
                    <Icon name="Moon" size={20} />
                    Сон (часов в сутки)
                  </label>
                  <span className="text-primary font-bold">{biomarkers.sleep}ч</span>
                </div>
                <Slider
                  value={[biomarkers.sleep]}
                  onValueChange={([value]) => setBiomarkers({ ...biomarkers, sleep: value })}
                  min={0}
                  max={12}
                  step={0.5}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="flex items-center gap-2 text-foreground">
                    <Icon name="Dumbbell" size={20} />
                    Физическая активность (дней в неделю)
                  </label>
                  <span className="text-primary font-bold">{biomarkers.exercise} дн.</span>
                </div>
                <Slider
                  value={[biomarkers.exercise]}
                  onValueChange={([value]) => setBiomarkers({ ...biomarkers, exercise: value })}
                  min={0}
                  max={7}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="flex items-center gap-2 text-foreground">
                    <Icon name="Droplet" size={20} />
                    Потребление воды (литров в день)
                  </label>
                  <span className="text-primary font-bold">{biomarkers.water}л</span>
                </div>
                <Slider
                  value={[biomarkers.water]}
                  onValueChange={([value]) => setBiomarkers({ ...biomarkers, water: value })}
                  min={0}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="flex items-center gap-2 text-foreground">
                    <Icon name="Zap" size={20} />
                    Уровень стресса
                  </label>
                  <span className="text-primary font-bold">{biomarkers.stress}/10</span>
                </div>
                <Slider
                  value={[biomarkers.stress]}
                  onValueChange={([value]) => setBiomarkers({ ...biomarkers, stress: value })}
                  min={0}
                  max={10}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="flex items-center gap-2 text-foreground">
                    <Icon name="Apple" size={20} />
                    Качество питания
                  </label>
                  <span className="text-primary font-bold">{biomarkers.nutrition}/10</span>
                </div>
                <Slider
                  value={[biomarkers.nutrition]}
                  onValueChange={([value]) => setBiomarkers({ ...biomarkers, nutrition: value })}
                  min={0}
                  max={10}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-bold text-foreground mb-2">💡 Персональные рекомендации</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                {biomarkers.sleep < 7 && <li>• Увеличьте продолжительность сна до 7-8 часов</li>}
                {biomarkers.exercise < 3 && <li>• Добавьте минимум 3 дня физической активности в неделю</li>}
                {biomarkers.water < 2 && <li>• Увеличьте потребление воды до 2-3 литров в день</li>}
                {biomarkers.stress > 6 && <li>• Высокий стресс - попробуйте медитацию или дыхательные практики</li>}
                {biomarkers.nutrition < 6 && <li>• Улучшите рацион: больше овощей, белка и полезных жиров</li>}
                {healthScore >= 80 && <li>• Отличные показатели! Продолжайте в том же духе 🎯</li>}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Начните свой путь к оптимизации
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Запишитесь на бесплатную консультацию с экспертом по биохакингу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-primary/20">
        <div className="container mx-auto text-center text-foreground/60">
          <p>© 2024 BioHack. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
