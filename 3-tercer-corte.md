---
permalink: /tercer-corte.html
layout: base
title: Tercer Corte
---

<style>
  .tc-section { margin-bottom: 3.5rem; }

  .tc-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-left: 4px solid #00ff41;
    background: #111911;
    box-shadow: inset 0 0 20px #00ff4111;
  }
  .tc-header h2 {
    font-family: 'Orbitron', monospace;
    font-size: 1.4rem;
    color: #00ff41;
    text-shadow: 0 0 10px #00ff4188;
    margin: 0;
    letter-spacing: 0.1em;
  }
  .tc-badge {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    border: 1px solid currentColor;
    padding: 0.2rem 0.6rem;
    letter-spacing: 0.1em;
  }

  .tc-block {
    background: #0d120d;
    border: 1px solid #1a2e1a;
    box-shadow: inset 0 0 12px #00ff4108;
    padding: 1.5rem 2rem;
    margin-bottom: 1.5rem;
  }
  .tc-block-title {
    font-family: 'Orbitron', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: #3a5e3a;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #1a2e1a;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .tc-block-title::before { content: '//'; color: #00ff41; }

  .tc-text {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.97rem;
    color: #b8d4b8;
    line-height: 1.8;
  }
  .tc-text p { margin-bottom: 1rem; }
  .tc-text strong { color: #00ff41; }
  .tc-text em { color: #ffb300; font-style: normal; }

  .tc-steps { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; }
  .tc-step {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95rem;
    color: #b8d4b8;
    line-height: 1.7;
  }
  .tc-step-num {
    min-width: 32px;
    height: 32px;
    border: 1px solid #00ff41;
    color: #00ff41;
    font-family: 'Orbitron', monospace;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 6px #00ff4133;
  }

  /* Tabla de red */
  .tc-table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
  .tc-table th {
    background: #111911;
    color: #00ff41;
    font-family: 'Orbitron', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.6rem 1rem;
    border-bottom: 1px solid #1a2e1a;
    text-align: left;
  }
  .tc-table td {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.88rem;
    color: #b8d4b8;
    padding: 0.55rem 1rem;
    border-bottom: 1px solid #0d150d;
    line-height: 1.5;
  }
  .tc-table tr:hover td { background: #0d150d; }
  .tc-table .col-mode { color: #00ffe7; font-weight: bold; }
  .tc-table .col-free { color: #00ff41; }
  .tc-table .col-pay { color: #ffb300; }

  /* Tarjetas de comando */
  .tc-cmd-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  .tc-cmd-card {
    background: #111911;
    border: 1px solid #1a2e1a;
    padding: 1rem 1.2rem;
  }
  .tc-cmd-label {
    font-family: 'Orbitron', monospace;
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
    margin-bottom: 0.4rem;
  }
  .tc-cmd-code {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: #00ff41;
    background: #080c08;
    padding: 0.3rem 0.6rem;
    border-left: 2px solid #00ff41;
    margin-bottom: 0.5rem;
    display: block;
  }
  .tc-cmd-desc {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.82rem;
    color: #3a5e3a;
    line-height: 1.6;
  }

  /* Grid de herramientas (2 columnas) */
  .tc-tools-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  @media (max-width: 800px) { .tc-tools-grid { grid-template-columns: 1fr; } }

  .tc-tool-card {
    background: #111911;
    border: 1px solid #1a2e1a;
    padding: 1.2rem 1.4rem;
  }
  .tc-tool-name {
    font-family: 'Orbitron', monospace;
    font-size: 0.8rem;
    color: #00ff41;
    letter-spacing: 0.1em;
    margin-bottom: 0.3rem;
  }
  .tc-tool-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.68rem;
    border: 1px solid;
    padding: 0.1rem 0.4rem;
    margin-right: 0.3rem;
  }
  .tag-pay  { color: #ffb300; border-color: #ffb30055; }
  .tag-free { color: #00ff41; border-color: #00ff4155; }
  .tc-tool-body {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.85rem;
    color: #b8d4b8;
    line-height: 1.7;
    margin-top: 0.7rem;
  }
  .tc-tool-body strong { color: #00ffe7; }

  /* Divider */
  .tc-divider {
    border: 0;
    border-top: 1px solid #1a2e1a;
    margin: 3rem 0;
    position: relative;
  }
  .tc-divider::after {
    content: '// SIGUIENTE_TEMA';
    position: absolute;
    top: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
    background: #080c08;
    padding: 0 1rem;
    font-family: 'Orbitron', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
  }

  /* Alerta / nota */
  .tc-note {
    border-left: 3px solid #ffb300;
    background: #111911;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.85rem;
    color: #ffb300;
    line-height: 1.6;
  }
  .tc-note-info {
    border-left: 3px solid #00ffe7;
    color: #00ffe7;
    background: #0a1210;
  }
</style>

<!-- ══════════ HERO ══════════ -->
<div class="hxkr-panel-bright p-4 corner-tl corner-br relative mb-8">
  <div class="font-hud text-xs tracking-widest mb-1" style="color:#3a5e3a;">// TERCER_CORTE</div>
  <h1 class="font-display text-5xl text-glow" style="color:#00ff41;">Servidores Linux y Soporte Remoto</h1>
  <p class="tc-text mt-2" style="font-size:1rem;">
    Instalación y administración de <strong>Ubuntu Server</strong> en VirtualBox,
    herramientas de <strong>soporte remoto</strong> y <strong>diagnóstico de hardware</strong>.
  </p>
</div>

<!-- ══════════ SECCIÓN 1: UBUNTU SERVER ══════════ -->
<div class="tc-section" id="ubuntu-server">
  <div class="tc-header">
    <h2>Ubuntu Server</h2>
    <span class="tc-badge" style="color:#ffb300;">LINUX</span>
    <span class="tc-badge" style="color:#00ffe7;">VIRTUALBOX</span>
    <span class="tc-badge" style="color:#00ff41;">SSH</span>
  </div>

  <!-- 1.1 Virtualización -->
  <div class="tc-block">
    <div class="tc-block-title">Virtualización y requisitos del sistema</div>
    <div class="tc-text">
      <p>
        La <strong>virtualización</strong> permite ejecutar uno o más sistemas operativos de forma simultánea sobre un único hardware físico, mediante entornos aislados llamados <strong>máquinas virtuales</strong>. Esto es especialmente valioso en entornos académicos y empresariales: se pueden practicar configuraciones de servidor real sin afectar el sistema operativo principal.
      </p>
      <p>
        El requisito más crítico para que la virtualización funcione eficientemente es el soporte de <strong>VT-x</strong> (Intel) o <strong>AMD-V</strong> en la CPU. Estas extensiones permiten que el procesador físico maneje directamente las instrucciones privilegiadas del sistema huésped, reduciendo la sobrecarga y mejorando el rendimiento. Sin ellas, VirtualBox opera en modo de emulación por software, lo que degrada notablemente el rendimiento y puede impedir crear VMs de 64 bits.
      </p>
      <p>
        A diferencia de un escritorio virtual, un <strong>servidor virtualizado</strong> prioriza estabilidad, disponibilidad de red y rendimiento de E/S, sin interfaz gráfica. Los recursos se calculan para garantizar acuerdos de nivel de servicio (SLA) y el adaptador de red suele operar en modo <em>puente</em> para tener presencia real en la red LAN.
      </p>
    </div>
    <table class="tc-table" style="margin-top:1.2rem;">
      <thead>
        <tr>
          <th>Componente</th>
          <th>Mínimo</th>
          <th>Recomendado</th>
          <th>Consecuencia si se incumple</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="col-mode">RAM</td><td>2 GB</td><td>4 GB</td><td>Swapping excesivo, sistema lento</td></tr>
        <tr><td class="col-mode">CPU</td><td>1 núcleo (VT-x/AMD-V)</td><td>2 núcleos</td><td>Contención de scheduler, alta latencia</td></tr>
        <tr><td class="col-mode">Disco</td><td>25 GB</td><td>40 GB</td><td>Errores de espacio, corrupción de datos</td></tr>
        <tr><td class="col-mode">VT-x / AMD-V</td><td colspan="2">Activado en BIOS/UEFI (obligatorio para 64 bits)</td><td>VM de 64 bits imposible o muy lenta</td></tr>
      </tbody>
    </table>
  </div>

  <!-- 1.2 VirtualBox -->
  <div class="tc-block">
    <div class="tc-block-title">VirtualBox — Hipervisor de tipo 2</div>
    <div class="tc-text">
      <p>
        <strong>VirtualBox</strong> es un hipervisor de tipo 2 desarrollado por Oracle que se ejecuta sobre el sistema operativo anfitrión como una aplicación más. Es gratuito, de código abierto y multiplataforma (Windows, macOS, Linux), lo que reduce las barreras de adopción en entornos académicos.
      </p>
      <p>
        El <strong>VirtualBox Extension Pack</strong> es un complemento adicional que extiende sus capacidades con soporte para USB 2.0/3.0, protocolo RDP para conexión remota a la interfaz gráfica de la VM, arranque PXE para tarjetas Intel y cifrado de disco. Sin él, la VM sigue funcionando, pero con limitaciones en la transferencia de archivos USB y el acceso remoto por RDP.
      </p>
    </div>
    <div class="tc-note">
      ⚠ La diferencia entre un <strong>disco dinámico</strong> y uno de <strong>tamaño fijo</strong>: el dinámico crece a medida que la VM escribe datos (ahorra espacio en el host), mientras que el fijo reserva todo el espacio desde el inicio y ofrece un rendimiento de E/S más predecible. Para laboratorios, el dinámico es suficiente; en producción se prefiere el fijo.
    </div>
  </div>

  <!-- 1.3 Ubuntu Server 24.04 LTS -->
  <div class="tc-block">
    <div class="tc-block-title">Ubuntu Server 24.04 LTS — Noble Numbat</div>
    <div class="tc-text">
      <p>
        <strong>Ubuntu Server 24.04 LTS</strong> es una distribución Linux orientada a servidores desarrollada por Canonical. <strong>LTS</strong> (Long Term Support) significa soporte garantizado de actualizaciones de seguridad durante <strong>5 años</strong> (hasta abril de 2029). Esta estabilidad es esencial en producción: un servidor no puede migrarse de sistema operativo cada 9 meses.
      </p>
      <p>
        Incorpora el kernel <strong>6.8</strong>, que ofrece mejor soporte de hardware moderno, mejoras en red, parches para vulnerabilidades como Spectre/Meltdown y optimizaciones de rendimiento. Un kernel actualizado con soporte extendido garantiza que los parches de seguridad lleguen sin necesidad de actualizar todo el sistema.
      </p>
      <p>
        La decisión de <strong>no instalar entorno gráfico</strong> responde a principios técnicos: un escritorio GNOME puede consumir entre 500 MB y 1 GB de RAM que en un servidor se necesita para atender solicitudes concurrentes. Además, cada componente gráfico es una superficie de ataque adicional. La administración se realiza exclusivamente mediante <strong>CLI</strong> y protocolos como <strong>SSH</strong>.
      </p>
    </div>
  </div>

  <!-- 1.4 Proceso de instalación -->
  <div class="tc-block">
    <div class="tc-block-title">Proceso de instalación — paso a paso</div>
    <ol class="tc-steps">
      <li class="tc-step"><span class="tc-step-num">01</span><span>Descargar la imagen ISO de Ubuntu Server 24.04 LTS desde <strong>ubuntu.com/download/server</strong> y montarla en la unidad óptica virtual de VirtualBox.</span></li>
      <li class="tc-step"><span class="tc-step-num">02</span><span>Crear la VM con <strong>2–4 GB de RAM</strong>, <strong>2 núcleos de CPU</strong>, <strong>25 GB de disco dinámico</strong>. Activar <strong>PAE/NX</strong> en la configuración del procesador para mejor compatibilidad y seguridad.</span></li>
      <li class="tc-step"><span class="tc-step-num">03</span><span>Configurar el adaptador de red según el caso de uso: <strong>NAT</strong> para acceso a internet sin visibilidad en la LAN, <strong>Adaptador Puente</strong> para que la VM tenga IP propia en la red local.</span></li>
      <li class="tc-step"><span class="tc-step-num">04</span><span>En el asistente de instalación basado en texto: seleccionar <strong>idioma en inglés</strong> (facilita la búsqueda de errores), configurar el teclado en español latinoamericano y aceptar el particionado automático.</span></li>
      <li class="tc-step"><span class="tc-step-num">05</span><span>Crear el usuario administrador con nombre y contraseña seguros. El sistema se configura automáticamente sin entorno gráfico.</span></li>
      <li class="tc-step"><span class="tc-step-num">06</span><span>En la selección de software, marcar <strong>OpenSSH Server</strong> para que el servidor esté disponible para conexiones remotas desde el primer arranque.</span></li>
      <li class="tc-step"><span class="tc-step-num">07</span><span>El instalador copia los archivos y configura el sistema. Tras el reinicio, Ubuntu Server queda operativo y accesible por SSH.</span></li>
    </ol>
    <div class="tc-note tc-note-info" style="margin-top:1.2rem;">
      ℹ El idioma del sistema se instala en inglés para que los mensajes de error sean directamente buscables en documentación oficial y foros técnicos. El teclado sí se puede configurar en español.
    </div>
  </div>

  <!-- 1.5 Configuración de red -->
  <div class="tc-block">
    <div class="tc-block-title">Configuración de red en VirtualBox</div>
    <table class="tc-table">
      <thead>
        <tr>
          <th>Modo</th>
          <th>Acceso a internet</th>
          <th>Visible en la LAN</th>
          <th>SSH desde el host</th>
          <th>Caso de uso</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-mode">NAT</td>
          <td>Sí (mediante IP del host)</td>
          <td>No</td>
          <td>Requiere port forwarding (ej: host:2222 → VM:22)</td>
          <td>Instalación de paquetes, actualizaciones</td>
        </tr>
        <tr>
          <td class="col-mode">Adaptador Puente</td>
          <td>Sí (IP propia en la red)</td>
          <td>Sí</td>
          <td>Directo: <code style="color:#00ff41;">ssh usuario@IP-de-la-VM</code></td>
          <td>Simular servidor real, acceso de múltiples equipos</td>
        </tr>
        <tr>
          <td class="col-mode">Solo-Anfitrión</td>
          <td>No</td>
          <td>Solo host y VMs</td>
          <td>Directo (red aislada)</td>
          <td>Laboratorios de seguridad, pruebas sin exposición</td>
        </tr>
      </tbody>
    </table>
    <div class="tc-text" style="margin-top:1rem;">
      <p>Con NAT, la conexión SSH desde el host requiere configurar una regla de reenvío de puertos: <strong>host puerto 2222 → VM puerto 22</strong>. El cliente SSH se conecta con <code style="color:#00ff41;">ssh -p 2222 usuario@127.0.0.1</code>. Con Adaptador Puente, la VM actúa como un equipo físico independiente en la red y la conexión SSH es directa a su IP.</p>
    </div>
  </div>

  <!-- 1.6 Comandos esenciales -->
  <div class="tc-block">
    <div class="tc-block-title">Comandos esenciales — primer inicio</div>
    <div class="tc-cmd-grid">
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">ACTUALIZACIÓN DEL SISTEMA</div>
        <code class="tc-cmd-code">sudo apt update && sudo apt upgrade -y</code>
        <div class="tc-cmd-desc">Sincroniza el índice de repositorios y aplica todos los parches disponibles. Primer paso obligatorio tras la instalación.</div>
      </div>
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">VER INTERFACES DE RED</div>
        <code class="tc-cmd-code">ip addr show</code>
        <div class="tc-cmd-desc">Muestra las interfaces de red activas y sus IPs. Necesario para saber la IP de la VM antes de conectarse por SSH.</div>
      </div>
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">USO DE DISCO</div>
        <code class="tc-cmd-code">df -h</code>
        <div class="tc-cmd-desc">Reporta el espacio disponible en todos los sistemas de archivos montados. Revisión periódica para prevenir fallos de servicio por disco lleno.</div>
      </div>
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">USO DE MEMORIA RAM</div>
        <code class="tc-cmd-code">free -h</code>
        <div class="tc-cmd-desc">Muestra RAM usada, libre y en caché. Clave para diagnosticar problemas de rendimiento por escasez de memoria.</div>
      </div>
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">ESTADO DEL SERVICIO SSH</div>
        <code class="tc-cmd-code">systemctl status ssh</code>
        <div class="tc-cmd-desc">Verifica si el daemon sshd está activo y muestra las últimas líneas de su log. systemctl es la interfaz de administración de servicios en Ubuntu.</div>
      </div>
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">INFORMACIÓN DEL HOST</div>
        <code class="tc-cmd-code">hostnamectl</code>
        <div class="tc-cmd-desc">Muestra y permite modificar el nombre del host, la arquitectura del kernel y metadatos del sistema. Importante en infraestructuras con múltiples servidores.</div>
      </div>
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">FIREWALL UFW</div>
        <code class="tc-cmd-code">sudo ufw allow OpenSSH && sudo ufw enable</code>
        <div class="tc-cmd-desc">Habilita el tráfico SSH antes de activar el firewall. UFW implementa denegación por defecto: solo pasan los puertos explícitamente permitidos.</div>
      </div>
      <div class="tc-cmd-card">
        <div class="tc-cmd-label">NOMBRE DEL SERVIDOR</div>
        <code class="tc-cmd-code">sudo hostnamectl set-hostname nombre-servidor</code>
        <div class="tc-cmd-desc">Define el hostname del servidor. Un nombre descriptivo facilita la administración en infraestructuras multi-servidor y aparece en los logs del sistema.</div>
      </div>
    </div>
  </div>

  <!-- 1.7 SSH -->
  <div class="tc-block">
    <div class="tc-block-title">Conexión remota por SSH — seguridad y configuración</div>
    <div class="tc-text">
      <p>
        <strong>SSH (Secure Shell)</strong> es el protocolo estándar de acceso remoto en servidores Linux. Proporciona un canal cifrado de extremo a extremo para ejecutar comandos remotamente, transferir archivos (SCP/SFTP) y redirigir puertos. Reemplaza protocolos inseguros como Telnet, que transmitían credenciales en texto plano.
      </p>
      <p>
        Los <strong>riesgos de una configuración incorrecta</strong> son graves: herramientas automatizadas escanean internet continuamente buscando el puerto 22 abierto y prueban miles de combinaciones de usuario y contraseña por segundo (<em>fuerza bruta</em>). Un servidor SSH mal configurado puede ser comprometido en minutos.
      </p>
    </div>
    <table class="tc-table" style="margin-top:1rem;">
      <thead>
        <tr><th>Medida de seguridad SSH</th><th>Comando / configuración</th><th>Efecto</th></tr>
      </thead>
      <tbody>
        <tr><td>Deshabilitar acceso root</td><td><code style="color:#00ff41;">PermitRootLogin no</code> en sshd_config</td><td>Impide acceso directo con el usuario más poderoso</td></tr>
        <tr><td>Autenticación por clave pública</td><td><code style="color:#00ff41;">ssh-keygen</code> + <code style="color:#00ff41;">ssh-copy-id</code></td><td>Elimina ataques de fuerza bruta de contraseña</td></tr>
        <tr><td>Cambiar puerto por defecto</td><td><code style="color:#00ff41;">Port 2222</code> en sshd_config</td><td>Reduce el volumen de escaneos automatizados</td></tr>
        <tr><td>Bloqueo automático de IPs</td><td><code style="color:#00ff41;">sudo apt install fail2ban</code></td><td>Bloquea temporalmente IPs con múltiples fallos de auth</td></tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="tc-divider">

<!-- ══════════ SECCIÓN 2: HERRAMIENTAS REMOTAS Y DIAGNÓSTICO ══════════ -->
<div class="tc-section" id="herramientas">
  <div class="tc-header">
    <h2>Soporte Remoto y Diagnóstico</h2>
    <span class="tc-badge" style="color:#00ff41;">LIBRE</span>
    <span class="tc-badge" style="color:#ffb300;">PAGO</span>
    <span class="tc-badge" style="color:#00ffe7;">HARDWARE</span>
  </div>

  <!-- 2.1 Soporte remoto pago -->
  <div class="tc-block">
    <div class="tc-block-title">Herramientas de soporte remoto — pagas</div>
    <div class="tc-text" style="margin-bottom:1.2rem;">
      <p>Las soluciones comerciales integran mecanismos avanzados de seguridad, soporte técnico contractual y cumplimiento de normativas como ISO/IEC 27001, HIPAA y SOC 2. Transmiten cifrado el escritorio del equipo remoto y los eventos de teclado/ratón mediante codecs propietarios optimizados.</p>
    </div>
    <div class="tc-tools-grid">
      <div class="tc-tool-card">
        <div class="tc-tool-name">TeamViewer</div>
        <span class="tc-tool-tag tag-pay">PAGO</span>
        <span class="tc-tool-tag tag-pay">AES-256 / RSA-4096</span>
        <div class="tc-tool-body">
          Plataforma líder del mercado (2005). Red propietaria de servidores de relevo globales con identificador único por instalación. Soporta <strong>SSO, Wake-on-LAN, auditoría completa</strong> y cumple ISO/IEC 27001, HIPAA, SOC 2/3. <br>
          <strong>Limitación:</strong> costo elevado (desde USD 24,90/mes) y en 2024 sufrió intrusión atribuida al grupo APT29.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">AnyDesk</div>
        <span class="tc-tool-tag tag-pay">PAGO</span>
        <span class="tc-tool-tag tag-pay">TLS 1.2 / RSA-2048</span>
        <div class="tc-tool-body">
          Lanzado en 2014, diseñado para baja latencia con el códec propietario <strong>DeskRT</strong>. Operable en enlaces de 1 Mbps. Huella muy reducida en disco y memoria. <br>
          <strong>Limitación:</strong> en febrero de 2024 sufrió compromiso de sus sistemas de producción (sustracción de código fuente y certificado de firma). Precios aumentaron 26–40% en 2025.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">Splashtop</div>
        <span class="tc-tool-tag tag-pay">PAGO</span>
        <span class="tc-tool-tag tag-pay">AES-256 / TLS</span>
        <div class="tc-tool-body">
          Rendimiento empresarial a precios accesibles (desde USD 5/mes). Soporta hasta <strong>4 monitores en 4K</strong>, audio remoto y cumple HIPAA, GDPR, SOC 2 y FERPA. Ideal para edición gráfica y CAD remotos. <br>
          <strong>Limitación:</strong> problemas ocasionales de resolución reportados por usuarios.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">Zoho Assist</div>
        <span class="tc-tool-tag tag-pay">PAGO</span>
        <span class="tc-tool-tag tag-pay">SSL/TLS 256-bit</span>
        <div class="tc-tool-body">
          Funciona <strong>desde el navegador</strong> sin instalación previa en el cliente. Integración nativa con el ecosistema Zoho (CRM, Desk). Soporta sesiones atendidas y desatendidas, reinicio en modo seguro y branding personalizado. <br>
          <strong>Limitación:</strong> conjunto de funciones avanzadas más reducido que TeamViewer.
        </div>
      </div>
    </div>
  </div>

  <!-- 2.2 Soporte remoto libre -->
  <div class="tc-block">
    <div class="tc-block-title">Herramientas de soporte remoto — libres</div>
    <div class="tc-tools-grid">
      <div class="tc-tool-card">
        <div class="tc-tool-name">RustDesk</div>
        <span class="tc-tool-tag tag-free">AGPL v3</span>
        <span class="tc-tool-tag tag-free">NaCl / Ed25519</span>
        <div class="tc-tool-body">
          Alternativa libre más madura a TeamViewer/AnyDesk. Permite <strong>auto-hospedar</strong> el servidor de relevo (hbbr) e identificación (hbbs), manteniendo todo el tráfico en infraestructura propia. Conexiones P2P con UDP hole-punching. <br>
          <strong>Limitación:</strong> consola web administrativa solo en edición Pro de pago (USD 9,90/mes).
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">Chrome Remote Desktop</div>
        <span class="tc-tool-tag tag-free">GRATUITO</span>
        <span class="tc-tool-tag tag-free">WebRTC / TLS</span>
        <div class="tc-tool-body">
          Solución de Google, gratuita sin restricciones. Instalación trivial: extensión de Chrome + host nativo. Sin configuración de puertos ni VPN. Autenticación delegada en Google (con verificación en 2 pasos).<br>
          <strong>Limitación:</strong> sin grabación de sesiones, gestión centralizada ni auditoría corporativa.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">AnyViewer</div>
        <span class="tc-tool-tag tag-free">FREEMIUM</span>
        <span class="tc-tool-tag tag-free">ECC 256-bit</span>
        <div class="tc-tool-body">
          Desarrollado por AOMEI Technology. Plan gratuito con hasta 3 dispositivos y sesiones atendidas/desatendidas. Interfaz similar a TeamViewer, bajo curva de aprendizaje. Soporte multimonitor y transferencia de archivos. <br>
          <strong>Limitación:</strong> solo Windows/iOS/Android, sin soporte Linux ni macOS completo.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">UltraVNC</div>
        <span class="tc-tool-tag tag-free">GNU GPL</span>
        <span class="tc-tool-tag tag-free">VNC + AES plugin</span>
        <div class="tc-tool-body">
          Implementación libre del protocolo VNC. Arquitectura cliente-servidor pura sin servidores intermedios. Ideal para <strong>redes LAN internas</strong> y entornos con VPN. Soporta despliegues silenciosos por Group Policy. <br>
          <strong>Limitación:</strong> requiere apertura de puertos o VPN; solo Windows.
        </div>
      </div>
    </div>
    <table class="tc-table" style="margin-top:1.5rem;">
      <thead>
        <tr><th>Herramienta</th><th>Licencia</th><th>Cifrado</th><th>Plataformas</th><th>Modelo</th></tr>
      </thead>
      <tbody>
        <tr><td class="col-pay">TeamViewer</td><td>Paga</td><td>AES-256, RSA-4096</td><td>Win, Mac, Linux, Android, iOS</td><td>SaaS</td></tr>
        <tr><td class="col-pay">AnyDesk</td><td>Paga</td><td>TLS 1.2, RSA-2048</td><td>Win, Mac, Linux, Android, iOS</td><td>SaaS</td></tr>
        <tr><td class="col-pay">Splashtop</td><td>Paga</td><td>AES-256, TLS</td><td>Win, Mac, Linux, iOS, Android</td><td>SaaS</td></tr>
        <tr><td class="col-pay">Zoho Assist</td><td>Paga</td><td>SSL/TLS 256-bit</td><td>Web, Win, Mac, Linux</td><td>SaaS</td></tr>
        <tr><td class="col-free">RustDesk</td><td>AGPL v3</td><td>NaCl, Ed25519</td><td>Win, Mac, Linux, iOS, Android</td><td>Auto-hospedado</td></tr>
        <tr><td class="col-free">Chrome Remote Desktop</td><td>Gratuito</td><td>TLS, WebRTC</td><td>Win, Mac, Linux, Chrome OS</td><td>Cloud Google</td></tr>
        <tr><td class="col-free">AnyViewer</td><td>Freemium</td><td>ECC 256-bit</td><td>Windows, iOS, Android</td><td>SaaS</td></tr>
        <tr><td class="col-free">UltraVNC</td><td>GNU GPL</td><td>VNC + AES plugin</td><td>Windows</td><td>Local / VPN</td></tr>
      </tbody>
    </table>
  </div>

  <!-- 2.3 Diagnóstico de discos -->
  <div class="tc-block">
    <div class="tc-block-title">Diagnóstico de hardware — almacenamiento (S.M.A.R.T.)</div>
    <div class="tc-text">
      <p>
        La tecnología <strong>S.M.A.R.T.</strong> (Self-Monitoring, Analysis and Reporting Technology) registra internamente métricas de salud en discos HDD, SSD y NVMe. Atributos clave: <em>Reallocated Sector Count</em> (sectores defectuosos reasignados), <em>Uncorrectable Read Errors</em> y <em>Power On Hours</em>. Un disco con sectores reasignados crecientes está en degradación progresiva: cuando la reserva de sectores se agota, los datos se pierden.
      </p>
    </div>
    <div class="tc-tools-grid">
      <div class="tc-tool-card">
        <div class="tc-tool-name">CrystalDiskInfo</div>
        <span class="tc-tool-tag tag-free">MIT — LIBRE</span>
        <div class="tc-tool-body">
          Estándar de facto para monitoreo de salud de discos en Windows. Lee atributos S.M.A.R.T. y los presenta en valor crudo y normalizado con indicador de colores: <strong>azul</strong> (saludable), <strong>amarillo</strong> (precaución), <strong>rojo</strong> (malo). Soporta SATA, NVMe y USB. <br>
          <strong>Limitación:</strong> solo Windows; no ejecuta pruebas activas de superficie.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">Hard Disk Sentinel</div>
        <span class="tc-tool-tag tag-pay">PAGO</span>
        <div class="tc-tool-body">
          Va más allá de S.M.A.R.T.: combina escaneos activos de superficie, pruebas de rendimiento, monitoreo continuo en segundo plano y un <strong>algoritmo propietario de predicción de fallos</strong> que estima el tiempo restante antes de la pérdida de datos. Disponible para Windows y Linux. Panel web opcional para consulta remota.
        </div>
      </div>
    </div>
  </div>

  <!-- 2.4 Diagnóstico de RAM -->
  <div class="tc-block">
    <div class="tc-block-title">Diagnóstico de memoria RAM</div>
    <div class="tc-text" style="margin-bottom:1rem;">
      <p>Los errores de RAM son causa frecuente de inestabilidad intermitente y difícil de diagnosticar. Las herramientas especializadas operan <strong>fuera del sistema operativo</strong>, escribiendo y leyendo patrones de bits en cada celda física para detectar fallos.</p>
    </div>
    <div class="tc-tools-grid">
      <div class="tc-tool-card">
        <div class="tc-tool-name">MemTest86</div>
        <span class="tc-tool-tag tag-pay">PAGO (edición Pro)</span>
        <div class="tc-tool-body">
          Referencia de la industria (PassMark Software). Arrancable desde USB/UEFI, sin interferencia del SO. Implementa <strong>13 algoritmos de prueba</strong> incluyendo patrones de marcha, prueba de bit flip y verificación ECC. Compatible con DDR3, DDR4 y DDR5. <br>
          La edición gratuita tiene funciones básicas; Pro añade automatización PXE y reportes personalizables.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">MemTest86+</div>
        <span class="tc-tool-tag tag-free">GNU GPL — LIBRE</span>
        <div class="tc-tool-body">
          Bifurcación libre de código abierto. Soporta BIOS heredado y UEFI moderno, DDR3/DDR4/DDR5, arquitecturas 32 y 64 bits. Reporta información detallada de chips SPD, frecuencias y latencias. <br>
          <strong>Limitación:</strong> binario no firmado por Microsoft; requiere desactivar Secure Boot temporalmente para arrancar.
        </div>
      </div>
    </div>
  </div>

  <!-- 2.5 Diagnóstico de CPU y temperatura -->
  <div class="tc-block">
    <div class="tc-block-title">Diagnóstico de CPU y temperatura</div>
    <div class="tc-text" style="margin-bottom:1rem;">
      <p>Las herramientas de monitoreo térmico obtienen lecturas directamente de los <strong>Digital Thermal Sensors (DTS)</strong> integrados en cada núcleo del procesador, con precisión que el sistema operativo no expone de forma nativa.</p>
    </div>
    <div class="tc-tools-grid">
      <div class="tc-tool-card">
        <div class="tc-tool-name">HWMonitor</div>
        <span class="tc-tool-tag tag-free">GRATUITO (CPUID)</span>
        <div class="tc-tool-body">
          Lee sensores centralizados del sistema: <strong>voltajes, temperaturas de CPU por núcleo, GPU, discos vía S.M.A.R.T., velocidad de ventiladores, consumo energético y frecuencias de reloj</strong> en tiempo real. Portable, menos de 30 MB de RAM. <br>
          La versión Pro añade monitoreo remoto por TCP/IP y gráficas históricas.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">Core Temp</div>
        <span class="tc-tool-tag tag-free">GRATUITO (ALCPU)</span>
        <div class="tc-tool-body">
          Especializada exclusivamente en temperatura del procesador. Consumo mínimo (~15 MB RAM). Muestra temperatura individual de cada núcleo, carga porcentual, frecuencia, VCore y <strong>distancia al límite TJ Max</strong> (punto de throttling térmico). Puede apagar el equipo automáticamente si se superan umbrales definidos por el usuario. <br>
          <strong>Limitación:</strong> solo CPU; sin GPU ni ventiladores.
        </div>
      </div>
    </div>
  </div>

  <!-- 2.6 Recuperación de archivos -->
  <div class="tc-block">
    <div class="tc-block-title">Recuperación de archivos</div>
    <div class="tc-text" style="margin-bottom:1rem;">
      <p>La eliminación lógica de un archivo no sobrescribe sus datos físicamente, sino que marca el espacio como disponible. Mientras los sectores no se reasignen a nuevos datos, el archivo es recuperable. Las herramientas de recuperación explotan este principio mediante dos técnicas: análisis del sistema de archivos y <strong>file carving</strong> (buscar firmas binarias bloque a bloque).</p>
    </div>
    <div class="tc-tools-grid">
      <div class="tc-tool-card">
        <div class="tc-tool-name">Recuva</div>
        <span class="tc-tool-tag tag-pay">FREEMIUM (Piriform)</span>
        <div class="tc-tool-body">
          Interfaz tipo asistente, muy accesible. Dos modos: <strong>escaneo rápido</strong> (consulta el sistema de archivos) y <strong>escaneo profundo</strong> (analiza sector a sector buscando firmas). Soporta FAT, exFAT y NTFS. La edición gratuita permite recuperación ilimitada. <br>
          <strong>Limitación:</strong> menor desempeño en sistemas de archivos muy dañados; solo Windows.
        </div>
      </div>
      <div class="tc-tool-card">
        <div class="tc-tool-name">PhotoRec</div>
        <span class="tc-tool-tag tag-free">GNU GPL — LIBRE</span>
        <div class="tc-tool-body">
          Recupera ~480 formatos de archivo mediante <strong>file carving</strong>: escanea el dispositivo bloque a bloque buscando firmas binarias específicas, funcionando incluso cuando la tabla de particiones está dañada o el disco fue formateado. Multiplataforma (Windows, macOS, Linux). Opera en modo <strong>solo lectura</strong> sobre el medio dañado. <br>
          <strong>Limitación:</strong> pierde nombres originales y estructura de carpetas.
        </div>
      </div>
    </div>
  </div>

  <!-- 2.7 Metodología de diagnóstico -->
  <div class="tc-block">
    <div class="tc-block-title">Metodología de diagnóstico estructurado</div>
    <div class="tc-text" style="margin-bottom:1rem;">
      <p>Un diagnóstico técnico completo sigue una metodología que va <strong>de lo general a lo específico</strong>, distinguiendo siempre entre <em>síntoma</em>, <em>causa raíz</em> y <em>solución</em>.</p>
    </div>
    <ol class="tc-steps">
      <li class="tc-step"><span class="tc-step-num">01</span><span><strong>Recopilar información del síntoma:</strong> cuándo ocurrió, con qué frecuencia, qué cambió en el sistema antes de la falla.</span></li>
      <li class="tc-step"><span class="tc-step-num">02</span><span><strong>Verificar conectividad de red:</strong> <code style="color:#00ff41;">ping</code>, <code style="color:#00ff41;">traceroute</code>. Descarta problemas de red antes de buscar fallos en el software.</span></li>
      <li class="tc-step"><span class="tc-step-num">03</span><span><strong>Verificar estado de servicios:</strong> <code style="color:#00ff41;">systemctl status &lt;servicio&gt;</code>. ¿Está el proceso activo y sin errores?</span></li>
      <li class="tc-step"><span class="tc-step-num">04</span><span><strong>Verificar almacenamiento:</strong> <code style="color:#00ff41;">df -h</code>, análisis S.M.A.R.T. Un disco lleno puede hacer caer cualquier servicio.</span></li>
      <li class="tc-step"><span class="tc-step-num">05</span><span><strong>Verificar uso de recursos:</strong> <code style="color:#00ff41;">htop</code>, <code style="color:#00ff41;">iotop</code>, <code style="color:#00ff41;">free -h</code>. Identifica si hay contención de CPU, RAM o disco.</span></li>
      <li class="tc-step"><span class="tc-step-num">06</span><span><strong>Revisar logs del sistema:</strong> <code style="color:#00ff41;">journalctl -xe</code>. Los logs son la fuente de verdad sobre qué falló y por qué.</span></li>
    </ol>
    <div class="tc-note" style="margin-top:1.2rem;">
      ⚠ <strong>Tratar solo el síntoma</strong> resuelve el problema temporalmente. Ej: reiniciar el servicio web (síntoma) sin liberar espacio en disco (causa raíz) hará que el fallo reaparezca en minutos. Siempre identificar y eliminar la causa raíz.
    </div>
  </div>

</div>
