'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Lock, Users, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AppName } from './constanst/global';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  // Mock images del sistema
  const systemImages = [
    {
      id: 1,
      title: 'Gestión de Citas',
      src: '/portfolio/screenone.png'
    },
    {
      id: 2,
      title: 'Dashboard',
      src: '/portfolio/screentwo.png'
    },
    {
      id: 3,
      title: 'Confirmación',
      src: '/portfolio/screent.png'
    },
  ];

  // Mock clientes
  const clients = [
    {
      id: 1,
      name: 'Psic. Alexia Guadalupe Coronado Mendez',
      logo: 'https://appoiments-psycho-front-1eee.onrender.com/assets/logo-BXtPBxiW.png',
      url: 'https://appoiments-psycho-front-1eee.onrender.com/admin/calendar'
    },
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % systemImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + systemImages.length) % systemImages.length);
  };

  const handleNextClient = () => {
    setCurrentClientIndex((prev) => (prev + 1) % clients.length);
  };

  const handlePrevClient = () => {
    setCurrentClientIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">{AppName}</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
            Gestión de Citas
            <span className="block text-primary">Simplificada para Psicólogos</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Olvídate de las agendas complicadas. Ofrece a tus pacientes reservas en línea con calendario compartido.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctanos <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* System Images Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Conoce Tu Sistema
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 h-96 flex items-center justify-center">
              <img
                src={systemImages[currentImageIndex].src}
                alt={systemImages[currentImageIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {systemImages[currentImageIndex].title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {currentImageIndex === 0 && 'Accede a un calendario intuitivo donde visualizas todas tus citas, bloques horarios y disponibilidad en tiempo real.'}
                {currentImageIndex === 1 && 'Panel de control completo con estadísticas, seguimiento de pacientes y resumen de tu actividad.'}
                {currentImageIndex === 2 && 'Tus pacientes reciben confirmaciones automáticas y recordatorios para evitar ausencias.'}
              </p>

              <div className="flex items-center gap-4 justify-between">
                <div className="flex gap-2">
                  {systemImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex ? 'bg-primary w-8' : 'bg-border w-2'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrevImage}
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNextImage}
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Por Qué Elegir {AppName}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Sistema de Reserva
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tus pacientes pueden agendar sus citas en línea a través de un link personalizado, disponible 24/7.
              </p>
            </Card>

            <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Calendario Compartido
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualiza tu disponibilidad de forma clara. Los pacientes ven solo los horarios que realmente estás disponible.
              </p>
            </Card>

            <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Privacidad Garantizada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cumplimos con estándares de privacidad médica. Tus datos y los de tus pacientes están protegidos.
              </p>
            </Card>

            <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Gestión de Pacientes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Organiza tu lista de pacientes, historial de citas y notas de seguimiento en un solo lugar.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Carousel Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Nuestros Clientes Confían en Nosotros
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="relative w-32 h-32">
                <img
                  src={clients[currentClientIndex].logo}
                  alt={clients[currentClientIndex].name}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {clients[currentClientIndex].name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Psicólogo/a Profesional
                </p>
                <Button
                  onClick={() => window.open(clients[currentClientIndex].url, '_blank')}
                  className="gap-2"
                >
                  Visitar Perfil <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-4 justify-center pt-8 border-t border-border w-full">
                <div className="flex gap-2">
                  {clients.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentClientIndex ? 'bg-primary w-8' : 'bg-border w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevClient}
                  aria-label="Cliente anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextClient}
                  aria-label="Siguiente cliente"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Clients Grid for Mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => window.open(client.url, '_blank')}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg"
                />
                <p className="font-semibold text-foreground text-sm">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Listo para Transformar tu Gestión de Citas?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
              Únete a cientos de psicólogos que confían en MindCalendar para simplificar sus agendas.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Crear Cuenta Gratis <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-border rounded-2xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              ¿Tienes Preguntas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Puedes escribirnos a este número en confianza
            </p>
            <a
              href="tel:+50376501035"
              className="inline-block text-4xl sm:text-5xl font-bold text-primary hover:text-accent transition-colors"
            >
              +503 7650-1035
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">{AppName}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La plataforma de gestión de citas para psicólogos profesionales.
            </p>
          </div>

          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Características</a></li>
              <li><a href="#" className="hover:text-primary transition">Precios</a></li>
              <li><a href="#" className="hover:text-primary transition">Seguridad</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Acerca de</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition">Contacto</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition">Términos</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookies</a></li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear().toString()} {AppName}. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
