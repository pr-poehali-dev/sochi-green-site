import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'beaches', label: 'Пляжи', icon: 'Waves' },
    { id: 'attractions', label: 'Достопримечательности', icon: 'Mountain' },
    { id: 'hotels', label: 'Отели', icon: 'Building2' },
    { id: 'restaurants', label: 'Рестораны', icon: 'Utensils' },
    { id: 'events', label: 'События', icon: 'Calendar' },
    { id: 'gallery', label: 'Галерея', icon: 'Camera' },
    { id: 'contacts', label: 'Контакты', icon: 'MapPin' },
  ];

  const beaches = [
    { name: 'Центральный пляж', description: 'Главный городской пляж с развитой инфраструктурой', rating: 4.2 },
    { name: 'Ривьера', description: 'Популярный пляж в центре города', rating: 4.5 },
    { name: 'Дагомыс', description: 'Спокойный галечный пляж', rating: 4.3 },
  ];

  const attractions = [
    { name: 'Олимпийский парк', description: 'Наследие зимних игр 2014', rating: 4.8 },
    { name: 'Роза Хутор', description: 'Горнолыжный курорт мирового класса', rating: 4.9 },
    { name: 'Дендрарий', description: 'Ботанический сад с уникальными растениями', rating: 4.6 },
  ];

  const hotels = [
    { name: 'Swissôtel Resort Sochi Kamelia', description: 'Роскошный отель у моря', rating: 4.7, price: 'от 15,000₽' },
    { name: 'Гранд Отель Жемчужина', description: 'Исторический отель в центре', rating: 4.3, price: 'от 8,000₽' },
    { name: 'Radisson Blu Paradise Resort', description: 'Современный курортный отель', rating: 4.5, price: 'от 12,000₽' },
  ];

  const restaurants = [
    { name: 'Синее море', description: 'Свежие морепродукты с видом на море', cuisine: 'Морская кухня', rating: 4.6 },
    { name: 'Мацеста', description: 'Традиционная кавказская кухня', cuisine: 'Кавказская', rating: 4.4 },
    { name: 'White Rabbit Family', description: 'Современная русская кухня', cuisine: 'Русская', rating: 4.8 },
  ];

  const events = [
    { name: 'Кинотавр', date: '15-25 июня', description: 'Международный кинофестиваль' },
    { name: 'Winter Arts Festival', date: '10-20 декабря', description: 'Фестиваль зимних искусств' },
    { name: 'Сочи Jazz Festival', date: '5-10 августа', description: 'Джазовый фестиваль на берегу моря' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-light/20 via-white to-ocean-light/20 font-open">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-forest-light/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Palmtree" size={32} className="text-forest" />
              <h1 className="text-2xl font-montserrat font-bold text-forest">Сочи</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-forest text-white'
                      : 'text-forest-dark hover:bg-forest-light/10'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean via-forest-light to-ocean opacity-80"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tMTIgMGgtNlYwaDZ2MzB6bTI0IDBoLTZWMGg2djMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
          
          <div className="relative z-10 text-center text-white px-4">
            <div className="flex items-center justify-center mb-6 space-x-4">
              <Icon name="Palmtree" size={48} className="text-white animate-pulse" />
              <Icon name="Palmtree" size={64} className="text-white" />
              <Icon name="Palmtree" size={48} className="text-white animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 animate-fade-in">
              Добро пожаловать в Сочи
            </h1>
            <p className="text-xl md:text-2xl font-open mb-8 max-w-2xl mx-auto leading-relaxed">
              Жемчужина Чёрного моря. Город олимпийских побед, субтропических садов и бесконечного лета
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-forest hover:bg-gray-100 font-montserrat font-semibold px-8 py-3"
                onClick={() => setActiveSection('attractions')}
              >
                <Icon name="Mountain" className="mr-2" size={20} />
                Исследовать город
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-forest font-montserrat font-semibold px-8 py-3"
                onClick={() => setActiveSection('beaches')}
              >
                <Icon name="Waves" className="mr-2" size={20} />
                Пляжи и отдых
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Beaches Section */}
      {activeSection === 'beaches' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Waves" size={48} className="text-ocean mr-4" />
                <h2 className="text-4xl font-montserrat font-bold text-forest">Пляжи Сочи</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                От галечных берегов до песчаных пляжей - выберите идеальное место для отдыха
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beaches.map((beach, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-ocean-light to-ocean"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-montserrat text-forest">{beach.name}</CardTitle>
                      <Badge variant="secondary" className="bg-forest-light/20 text-forest">
                        <Icon name="Star" size={14} className="mr-1" />
                        {beach.rating}
                      </Badge>
                    </div>
                    <CardDescription>{beach.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-forest hover:bg-forest-dark">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Attractions Section */}
      {activeSection === 'attractions' && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Mountain" size={48} className="text-forest mr-4" />
                <h2 className="text-4xl font-montserrat font-bold text-forest">Достопримечательности</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Откройте для себя уникальные места и культурные сокровища курорта
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-forest-light to-forest"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-montserrat text-forest">{attraction.name}</CardTitle>
                      <Badge variant="secondary" className="bg-forest-light/20 text-forest">
                        <Icon name="Star" size={14} className="mr-1" />
                        {attraction.rating}
                      </Badge>
                    </div>
                    <CardDescription>{attraction.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-forest hover:bg-forest-dark">
                      <Icon name="Camera" size={16} className="mr-2" />
                      Посетить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hotels Section */}
      {activeSection === 'hotels' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Building2" size={48} className="text-forest mr-4" />
                <h2 className="text-4xl font-montserrat font-bold text-forest">Отели</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Комфортное размещение от бюджетных вариантов до роскошных курортов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {hotels.map((hotel, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-sand-light to-sand"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-montserrat text-forest text-lg">{hotel.name}</CardTitle>
                      <Badge variant="secondary" className="bg-forest-light/20 text-forest">
                        <Icon name="Star" size={14} className="mr-1" />
                        {hotel.rating}
                      </Badge>
                    </div>
                    <CardDescription>{hotel.description}</CardDescription>
                    <div className="text-lg font-semibold text-forest mt-2">{hotel.price}</div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-forest hover:bg-forest-dark">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Restaurants Section */}
      {activeSection === 'restaurants' && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Utensils" size={48} className="text-forest mr-4" />
                <h2 className="text-4xl font-montserrat font-bold text-forest">Рестораны</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Вкусите разнообразие: от кавказской кухни до изысканных морепродуктов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {restaurants.map((restaurant, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-forest-light/50 to-ocean-light/50"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-montserrat text-forest">{restaurant.name}</CardTitle>
                      <Badge variant="secondary" className="bg-forest-light/20 text-forest">
                        <Icon name="Star" size={14} className="mr-1" />
                        {restaurant.rating}
                      </Badge>
                    </div>
                    <CardDescription>{restaurant.description}</CardDescription>
                    <Badge variant="outline" className="w-fit mt-2 border-forest text-forest">
                      {restaurant.cuisine}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-forest hover:bg-forest-dark">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Забронировать стол
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      {activeSection === 'events' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Calendar" size={48} className="text-forest mr-4" />
                <h2 className="text-4xl font-montserrat font-bold text-forest">События</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Круглогодичная программа фестивалей, концертов и культурных мероприятий
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-ocean to-forest-light"></div>
                  <CardHeader>
                    <CardTitle className="font-montserrat text-forest">{event.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit bg-ocean-light/20 text-ocean-dark">
                      {event.date}
                    </Badge>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-forest hover:bg-forest-dark">
                      <Icon name="Ticket" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === 'gallery' && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Camera" size={48} className="text-forest mr-4" />
                <h2 className="text-4xl font-montserrat font-bold text-forest">Галерея</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Красота Сочи в фотографиях - от горных вершин до морских закатов
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div 
                  key={index} 
                  className="aspect-square bg-gradient-to-br from-forest-light to-ocean hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon name="Image" size={32} className="text-white opacity-70" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contacts Section */}
      {activeSection === 'contacts' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Icon name="MapPin" size={48} className="text-forest mr-4" />
                <h2 className="text-4xl font-montserrat font-bold text-forest">Контакты</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Планируйте свой визит и получите всю необходимую информацию
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-forest flex items-center">
                    <Icon name="Info" className="mr-2" />
                    Туристическая информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" className="mr-3 text-forest" size={20} />
                    <span>+7 (862) 264-17-17</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="mr-3 text-forest" size={20} />
                    <span>info@visitsochi.com</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="mr-3 text-forest" size={20} />
                    <span>Ежедневно 9:00 - 18:00</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-forest flex items-center">
                    <Icon name="MapPin" className="mr-2" />
                    Как добраться
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Plane" className="mr-3 text-forest" size={20} />
                    <span>Аэропорт Сочи (AER)</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Train" className="mr-3 text-forest" size={20} />
                    <span>ЖД вокзал Сочи</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Car" className="mr-3 text-forest" size={20} />
                    <span>Трасса М-27 (Джубга - Сочи)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-forest text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Palmtree" size={32} className="text-white" />
                <h3 className="text-2xl font-montserrat font-bold">Сочи</h3>
              </div>
              <p className="text-forest-light">
                Ваш проводник по жемчужине Черного моря
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-forest-light">
                <li>Пляжи</li>
                <li>Достопримечательности</li>
                <li>Отели</li>
                <li>Рестораны</li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Полезное</h4>
              <ul className="space-y-2 text-forest-light">
                <li>События</li>
                <li>Галерея</li>
                <li>Погода</li>
                <li>Транспорт</li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-forest-light">
                <li>+7 (862) 264-17-17</li>
                <li>info@visitsochi.com</li>
                <li>г. Сочи, Краснодарский край</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-forest-light/30 mt-8 pt-8 text-center text-forest-light">
            <p>&copy; 2024 Сочи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;