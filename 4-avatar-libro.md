---
permalink: /avatar-libro.html
layout: base
title: Avatar y Libro Digital
---

<style>
  /* ── Layout principal ── */
  .av-section { margin-bottom: 3rem; }

  .av-panel-header {
    font-family: 'Orbitron', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: #3a5e3a;
    text-transform: uppercase;
    padding: 0.7rem 1.5rem;
    border-bottom: 1px solid #1a2e1a;
    background: #111911;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .av-panel-header::before { content: '//'; color: #00ff41; margin-right: 0.3rem; }

  /* ── Contenedor avatar + chat ── */
  .av-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    min-height: 520px;
    border: 1px solid #1a2e1a;
    box-shadow: inset 0 0 24px #00ff4108;
  }
  @media (max-width: 750px) {
    .av-container { grid-template-columns: 1fr; }
  }

  /* ── Panel izquierdo: avatar ── */
  .av-left {
    background: #0a0f0a;
    border-right: 1px solid #1a2e1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 1.5rem 1rem 1rem;
    gap: 0.8rem;
    position: relative;
  }
  .av-img-wrap {
    width: 260px;
    height: 260px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-shrink: 0;
  }
  #avatar-img {
    width: 260px;
    height: 260px;
    object-fit: contain;
    filter: drop-shadow(0 0 18px #00ff4166);
    transition: filter 0.1s;
    display: block;
  }
  #avatar-img.talking {
    filter: drop-shadow(0 0 28px #00ff41aa);
  }
  .av-status {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.78rem;
    color: #3a5e3a;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    letter-spacing: 0.05em;
  }
  .av-status-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #3a5e3a;
    flex-shrink: 0;
    transition: background 0.2s, box-shadow 0.2s;
  }
  .av-status-dot.active {
    background: #00ff41;
    box-shadow: 0 0 6px #00ff41;
  }
  .av-examples {
    width: 100%;
    border-top: 1px solid #1a2e1a;
    padding-top: 0.8rem;
  }
  .av-examples-label {
    font-family: 'Orbitron', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
    margin-bottom: 0.5rem;
  }
  .av-example {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    color: #3a5e3a;
    padding: 0.3rem 0;
    border-left: 2px solid #1a2e1a;
    padding-left: 0.5rem;
    margin-bottom: 0.3rem;
    line-height: 1.4;
  }

  /* ── Panel derecho: chat ── */
  .av-right {
    display: flex;
    flex-direction: column;
    background: #0d120d;
  }
  .av-chat-history {
    flex: 1;
    overflow-y: auto;
    padding: 1.2rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 0;
    max-height: 400px;
    scrollbar-width: thin;
    scrollbar-color: #1a2e1a transparent;
  }
  .av-chat-history::-webkit-scrollbar { width: 4px; }
  .av-chat-history::-webkit-scrollbar-track { background: transparent; }
  .av-chat-history::-webkit-scrollbar-thumb { background: #1a2e1a; border-radius: 2px; }

  .av-msg { display: flex; flex-direction: column; gap: 0.2rem; max-width: 90%; }
  .av-msg-user { align-self: flex-end; align-items: flex-end; }
  .av-msg-bot  { align-self: flex-start; align-items: flex-start; }

  .av-msg-label {
    font-family: 'Orbitron', monospace;
    font-size: 0.5rem;
    letter-spacing: 0.15em;
    color: #3a5e3a;
  }
  .av-msg-user .av-msg-label { color: #00ffe7; }

  .av-msg-bubble {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.7;
    padding: 0.6rem 0.9rem;
    border: 1px solid #1a2e1a;
  }
  .av-msg-user .av-msg-bubble {
    background: #0a1210;
    border-color: #00ffe744;
    color: #00ffe7;
  }
  .av-msg-bot .av-msg-bubble {
    background: #111911;
    border-color: #1a2e1a;
    color: #b8d4b8;
  }
  .av-msg-bot .av-msg-bubble strong { color: #00ff41; }

  /* Intro message */
  .av-intro {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.88rem;
    color: #3a5e3a;
    text-align: center;
    padding: 2rem 1rem;
    line-height: 1.8;
    border: 1px dashed #1a2e1a;
    margin: 0.5rem;
  }
  .av-intro span { color: #00ff41; }

  /* ── Área de input ── */
  .av-input-area {
    border-top: 1px solid #1a2e1a;
    padding: 0.8rem 1rem;
    background: #111911;
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }
  .av-input {
    flex: 1;
    background: #0d120d;
    border: 1px solid #1a2e1a;
    color: #00ff41;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
    outline: none;
    transition: border-color 0.2s;
  }
  .av-input::placeholder { color: #3a5e3a; }
  .av-input:focus { border-color: #00ff4166; }
  .av-send-btn {
    font-family: 'Orbitron', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    background: transparent;
    border: 1px solid #00ff41;
    color: #00ff41;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  .av-send-btn:hover { background: #00ff4111; box-shadow: 0 0 8px #00ff4133; }
  .av-send-btn:disabled { border-color: #1a2e1a; color: #3a5e3a; cursor: not-allowed; }

  /* ── Libro digital ── */
  .lb-section {
    margin-bottom: 3rem;
    position: relative;
    z-index: 9998; /* encima del scan-line (z-index 9997) */
  }
  .lb-inner {
    border: 1px solid #1a2e1a;
    background: #0d120d;
    box-shadow: inset 0 0 20px #00ff4108;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  .lb-title {
    font-family: 'Orbitron', monospace;
    font-size: 0.9rem;
    color: #00ff41;
    letter-spacing: 0.15em;
    text-align: center;
  }
  .lb-desc {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.88rem;
    color: #3a5e3a;
    text-align: center;
    max-width: 520px;
    line-height: 1.7;
  }
  .lb-embed-wrap {
    border: 1px solid #1a2e1a;
    box-shadow: 0 0 20px #00ff4122;
    overflow: hidden;
    width: 100%;
    max-width: 960px;
    /* Recorta la barra inferior de Calameo */
    height: 530px;
  }
  .lb-embed-wrap iframe {
    display: block;
    width: 100%;
    height: 570px; /* 40px extra para que la barra quede fuera del área visible */
    border: 0;
    margin-bottom: -40px;
  }
  .lb-link {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.8rem;
    color: #3a5e3a;
    text-decoration: none;
    border: 1px solid #1a2e1a;
    padding: 0.4rem 1rem;
    transition: all 0.15s;
  }
  .lb-link:hover { color: #00ff41; border-color: #00ff41; }
</style>

<!-- HERO -->
<div class="hxkr-panel-bright p-4 corner-tl corner-br relative mb-8">
  <div class="font-hud text-xs tracking-widest mb-1" style="color:#3a5e3a;">// RECURSOS_INTERACTIVOS</div>
  <h1 class="font-display text-5xl text-glow" style="color:#00ff41;">Avatar y Libro Digital</h1>
  <p style="font-family:'Share Tech Mono',monospace;font-size:1rem;color:#b8d4b8;margin-top:0.5rem;">
    Asistente interactivo con conocimiento de los tres cortes · Libro digital de diagnóstico de equipos
  </p>
</div>

<!-- ══════════ SECCIÓN AVATAR ══════════ -->
<div class="av-section">
  <div class="av-panel-header">ASISTENTE INTERACTIVO — SISTEMAS OPERATIVOS</div>
  <div class="av-container">

    <!-- IZQUIERDA: avatar -->
    <div class="av-left">
      <div class="av-img-wrap">
        <img id="avatar-img"
             src="{{ '/assets/img/avatar_general/001_White_Idle.png' | relative_url }}"
             alt="Avatar asistente">
      </div>
      <div class="av-status">
        <span class="av-status-dot" id="status-dot"></span>
        <span id="status-text">EN ESPERA</span>
      </div>
      <div class="av-examples">
        <div class="av-examples-label">EJEMPLOS DE PREGUNTA</div>
        <div class="av-example">"¿Qué hace el comando sfc /scannow?"</div>
        <div class="av-example">"¿Cómo proteger SSH en Ubuntu Server?"</div>
        <div class="av-example">"¿Qué es RustDesk y para qué sirve?"</div>
      </div>
    </div>

    <!-- DERECHA: chat -->
    <div class="av-right">
      <div class="av-chat-history" id="chat-history">
        <div class="av-intro">
          <span>SISTEMA LISTO</span><br>
          Puedes preguntarme sobre cualquier tema visto en los tres cortes:<br>
          comandos de Windows · instalación de SO · Ubuntu Server · SSH ·<br>
          herramientas remotas · diagnóstico de hardware · y más.
        </div>
      </div>
      <div class="av-input-area">
        <input type="text" id="av-input" class="av-input"
               placeholder="Escribe tu pregunta aquí..."
               autocomplete="off" maxlength="200">
        <button id="av-send" class="av-send-btn">ENVIAR</button>
      </div>
    </div>

  </div>
</div>

<!-- ══════════ SECCIÓN LIBRO DIGITAL ══════════ -->
<div class="lb-section">
  <div class="av-panel-header">LIBRO DIGITAL — DIAGNÓSTICO DE EQUIPOS</div>
  <div class="lb-inner">
    <div class="lb-title">Libro Digital de Diagnóstico de Equipos</div>
    <div class="lb-desc">
      Documentación técnica completa sobre diagnóstico y mantenimiento de equipos de cómputo,
      elaborada como parte del proyecto de Sistemas Operativos.
    </div>
    <div class="lb-embed-wrap">
      <iframe src="//v.calameo.com/?bkcode=0082320230f863d0829a6&mode=mini"
              scrolling="no" allowtransparency allowfullscreen></iframe>
    </div>
    <a href="https://www.calameo.com/books/0082320230f863d0829a6"
       target="_blank" class="lb-link">↗ ABRIR EN CALAMEO</a>
  </div>
</div>

<!-- ══════════ MOTOR NLP + LÓGICA AVATAR ══════════ -->
<script>
(function () {

  /* ── 1. BASE DE CONOCIMIENTO ── */
  const KB = [
    /* META */
    { id:'greeting', kw:['hola','buenos dias','buenas tardes','buenas noches','saludos','hey','buen dia','buenas'],
      r:'¡Hola! Soy el asistente de este proyecto de Sistemas Operativos. Puedo responderte sobre los temas de los tres cortes: comandos de Windows, instalación de sistemas operativos, Ubuntu Server, herramientas remotas y diagnóstico de hardware. ¿En qué te puedo ayudar?' },

    { id:'farewell', kw:['adios','hasta luego','chao','bye','hasta pronto','nos vemos','gracias','thank you','ciao'],
      r:'¡Hasta luego! Si tienes más preguntas sobre los temas del curso, aquí estaré. ¡Éxitos!' },

    { id:'about_project', kw:['que es este proyecto','de que trata','proyecto','pagina','sitio','objetivo','proposito','para que sirve este sitio','trata esta pagina'],
      r:'Este es un proyecto académico de la asignatura Sistemas Operativos de la Universidad Santo Tomás de Villavicencio. Documenta lo visto durante el semestre en tres cortes: el primer corte cubre comandos CMD y PowerShell para mantenimiento de Windows, el segundo corte trata la instalación de Windows 11 y Ubuntu en VirtualBox, y el tercer corte aborda Ubuntu Server, SSH, virtualización y herramientas de soporte remoto y diagnóstico de hardware.' },

    { id:'authors', kw:['quien hizo','autores','creadores','desarrolladores','estudiantes','michael','joseph','arias','diaz','quien creo'],
      r:'Este proyecto fue desarrollado por Michael David Arias Torres y Joseph Hans Díaz González, estudiantes de Ingeniería en Sistemas de la Universidad Santo Tomás de Villavicencio, para la asignatura Sistemas Operativos con el profesor Omar Camilo Santiago García.' },

    { id:'navigation', kw:['secciones','pestanas','navegar','apartados','partes','donde encontrar','contenido pagina','que tiene'],
      r:'La página tiene cinco secciones: Inicio (historia de los SO), Primer Corte (comandos CMD y PowerShell), Segundo Corte (instalación de Windows 11 y Ubuntu), Tercer Corte (Ubuntu Server y herramientas remotas), y esta sección con el Avatar y el Libro Digital.' },

    /* PRIMER CORTE */
    { id:'cmd_sfc', kw:['sfc','scannow','integridad archivos','reparar archivos sistema','archivos danados','verificar sistema','system file checker'],
      r:'sfc /scannow (System File Checker) escanea y repara archivos del sistema dañados o corruptos. Debe ejecutarse como Administrador. Es muy útil ante errores inesperados o comportamiento inestable. Si falla, primero ejecuta DISM /Online /Cleanup-Image /RestoreHealth para reparar la imagen base del sistema.' },

    { id:'cmd_dism', kw:['dism','restorehealth','cleanup image','imagen windows','reparar imagen','online cleanup','dism online'],
      r:'DISM /Online /Cleanup-Image /RestoreHealth repara la imagen de Windows descargando archivos correctos desde Windows Update. Se debe ejecutar antes de sfc /scannow cuando este último falla. Necesita conexión a internet y permisos de Administrador. Es más profundo que SFC porque corrige la imagen base del sistema operativo.' },

    { id:'cmd_chkdsk', kw:['chkdsk','check disk','comprobar disco','errores disco','sectores defectuosos','disco duro error','chequear disco'],
      r:'chkdsk C: /f /r comprueba y repara errores en el disco. El parámetro /f corrige errores del sistema de archivos y /r localiza sectores defectuosos recuperando la información legible. Si se ejecuta en la unidad del sistema, Windows pedirá reiniciar para completar la comprobación antes de que el sistema cargue.' },

    { id:'cmd_tasklist', kw:['tasklist','get-process','procesos activos','ver procesos','lista procesos','procesos corriendo','que procesos hay'],
      r:'tasklist (CMD) y Get-Process (PowerShell) muestran todos los procesos activos con su PID, nombre y uso de memoria. Son útiles para identificar programas que consumen muchos recursos o detectar procesos sospechosos. Get-Process ofrece más detalles y permite filtrar por nombre.' },

    { id:'cmd_taskkill', kw:['taskkill','stop-process','matar proceso','finalizar proceso','cerrar proceso','terminar proceso','forzar cierre proceso'],
      r:'taskkill /IM programa.exe /F (CMD) y Stop-Process -Name programa -Force (PowerShell) fuerzan el cierre de un proceso por nombre. El parámetro /F fuerza la terminación sin confirmación. También puedes usar el PID: taskkill /PID 1234 /F. Útil cuando una aplicación se congela y no responde.' },

    { id:'cmd_computerinfo', kw:['get-computerinfo','informacion sistema','info sistema','datos sistema','especificaciones sistema','computerinfo'],
      r:'Get-ComputerInfo es un comando PowerShell que muestra información completa del sistema: versión del SO, nombre del equipo, fabricante, modelo, procesador, RAM total, arquitectura y configuración de idioma. Es más detallado que systeminfo y devuelve los datos en formato de objeto PowerShell.' },

    { id:'cmd_ipconfig', kw:['ipconfig','configuracion ip','direccion ip','ver ip','ip del equipo','configuracion red','ipconfig all'],
      r:'ipconfig /all muestra la configuración completa de red: dirección IP, máscara de subred, puerta de enlace, servidores DNS, dirección MAC y si DHCP está activo. Es el primer comando para diagnosticar problemas de conectividad. La opción /all incluye detalles que no aparecen con ipconfig a secas.' },

    { id:'cmd_iprenew', kw:['ipconfig release','ipconfig renew','renovar ip','liberar ip','solicitar ip nueva','ip dhcp','renovar dhcp'],
      r:'ipconfig /release libera la dirección IP actual asignada por DHCP, e ipconfig /renew solicita una nueva al servidor DHCP. Se usan juntos para resolver problemas de conectividad por conflictos de IP. Solo aplica para conexiones DHCP, no IPs estáticas.' },

    { id:'cmd_flushdns', kw:['flushdns','vaciar dns','limpiar dns','cache dns','borrar dns','dns flush','resolver dns','problemas dns'],
      r:'ipconfig /flushdns limpia la caché de resolución DNS del sistema. Es útil cuando un sitio no carga correctamente después de un cambio de DNS o hay resoluciones incorrectas cacheadas. Tras ejecutarlo, el sistema consultará el servidor DNS de nuevo para cada dominio.' },

    { id:'cmd_ping', kw:['ping','tracert','test-netconnection','probar conectividad','verificar conexion','ruta red','latencia','conexion internet','trazar ruta'],
      r:'ping google.com prueba la conectividad enviando paquetes ICMP y mostrando el tiempo de respuesta. tracert google.com muestra la ruta completa de los paquetes hasta el destino, útil para identificar dónde se pierde la conexión. Test-NetConnection en PowerShell combina ambas funciones con información adicional sobre puertos TCP.' },

    { id:'cmd_psdrive', kw:['get-psdrive','uso discos','espacio discos','listar unidades','drives powershell','unidades sistema'],
      r:'Get-PSDrive en PowerShell muestra el uso de todos los drives del sistema: discos físicos, unidades de red, el registro de Windows y otros proveedores. Muestra espacio usado, libre y total para las unidades de disco. Es el equivalente PowerShell de ver "Este equipo" con capacidades de cada unidad.' },

    { id:'cmd_disk', kw:['get-disk','get-partition','diskpart','particiones','listar discos','administrar disco','gestionar particiones','disco virtual'],
      r:'Get-Disk y Get-Partition (PowerShell) listan discos físicos y sus particiones con detalles técnicos. diskpart es la herramienta interactiva de CMD para gestión avanzada: crear, eliminar o formatear particiones con list disk, select disk 0 y list partition. Usar diskpart con precaución ya que puede borrar datos permanentemente.' },

    { id:'cmd_netuser', kw:['net user','usuarios locales','ver usuarios','cuentas usuario','listar usuarios','crear usuario','agregar usuario','nuevo usuario'],
      r:'net user (sin parámetros) lista todos los usuarios locales. net user nuevoUsuario contraseña /add crea uno nuevo. net localgroup Administrators nuevoUsuario /add añade ese usuario al grupo de administradores. Permiten gestionar cuentas sin abrir el Panel de Control.' },

    { id:'cmd_permissions', kw:['icacls','permisos','ntfs','permisos archivo','permisos carpeta','acl','control acceso','permisos windows'],
      r:'icacls C:\\Ruta\\Carpeta muestra los permisos NTFS de un archivo o carpeta: quién tiene acceso y de qué tipo (F=Full Control, M=Modify, R=Read, W=Write). También permite modificarlos: icacls archivo.txt /grant Usuario:(R) otorga permiso de lectura. Es la herramienta de línea de comandos para gestión de ACLs en Windows.' },

    { id:'cmd_services', kw:['sc query','get-service','listar servicios','ver servicios','servicios sistema','servicios windows','que servicios corren'],
      r:'sc query lista los servicios del sistema con su estado (running, stopped). Get-Service en PowerShell ofrece la misma información con más opciones de filtrado: Get-Service | Where-Object {$_.Status -eq "Running"} muestra solo los activos. Los servicios son procesos en segundo plano esenciales para el funcionamiento del sistema.' },

    { id:'cmd_netservice', kw:['net stop','net start','start-service','stop-service','iniciar servicio','detener servicio','reiniciar servicio','spooler'],
      r:'net stop NombreServicio y net start NombreServicio (CMD) detienen e inician servicios. En PowerShell: Start-Service y Stop-Service. Ejemplo: net stop Spooler detiene el servicio de impresión para resolver atascos de cola, y net start Spooler lo reinicia.' },

    { id:'cmd_cleanmgr', kw:['cleanmgr','liberador espacio','limpiar disco','liberar espacio','disco lleno','limpieza disco','archivos temporales windows'],
      r:'cleanmgr abre el Liberador de Espacio en Disco de Windows. Analiza el disco y permite eliminar archivos temporales, miniaturas, archivos de Windows Update antiguos y elementos de la papelera. Es seguro para recuperar espacio sin afectar el funcionamiento del sistema.' },

    { id:'cmd_msconfig', kw:['msconfig','win32 startupcommand','programas inicio','startup','arranque windows','inicio automatico','ciminstance startup'],
      r:'msconfig abre la Configuración del Sistema y permite gestionar programas que arrancan con Windows. Get-CimInstance Win32_StartupCommand en PowerShell lista los programas de inicio automático mostrando nombre, comando, ubicación y usuario. Desactivar programas innecesarios en el inicio mejora el tiempo de arranque.' },

    { id:'cmd_eventvwr', kw:['eventvwr','visor eventos','event viewer','ver eventos','registro eventos','log windows','eventos sistema'],
      r:'eventvwr abre el Visor de Eventos de Windows, herramienta fundamental para diagnóstico: registra errores del sistema, advertencias e información sobre aplicaciones y seguridad. Permite filtrar por nivel (Error, Advertencia, Información), fuente y fecha. Es el punto de partida cuando el sistema presenta comportamiento inestable.' },

    { id:'cmd_eventlog', kw:['get-eventlog','eventos powershell','log sistema powershell','consultar eventos powershell','newest eventos','logname system'],
      r:'Get-EventLog -LogName System -Newest 20 consulta los últimos 20 eventos del log del sistema desde PowerShell. Se puede filtrar: Get-EventLog -LogName System -EntryType Error muestra solo errores. Es útil para diagnóstico automatizado o cuando se necesita buscar eventos específicos sin la interfaz gráfica.' },

    { id:'cmd_updates', kw:['wuauclt','usoclient','actualizaciones windows','forzar actualizacion','detectar actualizaciones','windows update','startscan','buscar actualizaciones'],
      r:'wuauclt /detectnow fuerza a Windows a buscar actualizaciones (versiones antiguas). En Windows 10/11 moderno se usa UsoClient StartScan. Son útiles cuando Windows Update no detecta actualizaciones automáticamente o cuando se necesita aplicar parches urgentes de seguridad sin esperar el ciclo automático.' },

    /* SEGUNDO CORTE */
    { id:'install_overview', kw:['instalacion sistemas operativos','instalar so','virtualbox segundo corte','maquinas virtuales segundo','instalacion general'],
      r:'El segundo corte cubrió la instalación de sistemas operativos en VirtualBox: tanto Windows 11 como Ubuntu Linux como máquinas virtuales. VirtualBox es un hipervisor de tipo 2 que permite correr sistemas operativos dentro de otro sistema sin particionar el disco físico del equipo anfitrión.' },

    { id:'virtualbox', kw:['virtualbox','virtual box','que es virtualbox','para que sirve virtualbox','oracle virtualbox','vbox','instalar virtualbox','descargar virtualbox','como funciona virtualbox'],
      r:'VirtualBox es un hipervisor de tipo 2 desarrollado por Oracle, gratuito y de código abierto (GPL). Permite crear y ejecutar múltiples máquinas virtuales (VMs) sobre Windows, Linux o macOS sin modificar el disco del equipo anfitrión. Aprovecha las extensiones de virtualización de la CPU (VT-x en Intel, AMD-V en AMD) para mayor rendimiento. En el proyecto se usó para instalar Windows 11 en el segundo corte y Ubuntu Server en el tercero.' },

    { id:'guest_additions', kw:['guest additions','adiciones al invitado','adiciones virtualbox','pantalla dinamica vm','carpetas compartidas vm','integracion anfitrion vm','mejorar resolucion vm'],
      r:'Las Guest Additions de VirtualBox son un paquete de controladores y utilidades que se instalan dentro de la máquina virtual. Aportan: resolución de pantalla dinámica que se adapta a la ventana, carpetas compartidas entre host y VM, portapapeles bidireccional, integración del puntero del ratón y mejor rendimiento gráfico. Se instalan desde el menú Dispositivos > Insertar imagen de CD de las Guest Additions.' },

    { id:'vm_general', kw:['maquina virtual','que es una vm','crear vm','nueva vm','configurar vm','especificaciones vm','cuanta ram vm'],
      r:'Una máquina virtual (VM) es un equipo emulado por software que se ejecuta dentro de otro sistema operativo. Se crea en VirtualBox especificando: nombre, tipo de SO, RAM (mínimo 2 GB para Ubuntu, 4 GB para Windows 11), almacenamiento (VDI dinámico o fijo) y red. Cada VM tiene su propio disco virtual (.vdi) aislado del disco del equipo anfitrión.' },

    { id:'netstat', kw:['netstat','conexiones activas','puertos abiertos','ver puertos','conexiones red','que conexiones hay','get-nettcpconnection'],
      r:'netstat -ano (CMD) muestra todas las conexiones de red activas con su PID, estado y puerto local/remoto. -a incluye puertos en escucha, -n muestra IPs en vez de nombres, -o añade el PID para identificar el proceso. En PowerShell: Get-NetTCPConnection. Útil para detectar conexiones sospechosas o verificar qué puertos están en uso antes de configurar el firewall.' },

    { id:'nslookup', kw:['nslookup','consulta dns','resolver dominio','diagnostico dns','buscar ip dominio','dns query','resolver nombre'],
      r:'nslookup dominio.com consulta el servidor DNS para obtener la IP de un dominio. Sin parámetros, entra en modo interactivo. nslookup google.com 8.8.8.8 fuerza la consulta al DNS de Google para comparar con el DNS configurado. Si las IPs difieren, hay posible envenenamiento de caché DNS. Es el complemento de ipconfig /flushdns para diagnóstico de problemas DNS.' },

    { id:'defrag', kw:['defrag','defragmentacion','desfragmentar','desfragmentacion','disco lento hdd','optimizar disco','fragmentacion','defragment'],
      r:'defrag C: /U /V desfragmenta el disco en CMD. En SSD no es necesaria ni recomendable (tiene TRIM). Windows 10/11 detecta automáticamente el tipo de disco y ejecuta optimización (TRIM para SSD, defrag para HDD). Get-PhysicalDisk en PowerShell permite verificar el tipo de disco antes de ejecutar cualquier optimización.' },

    { id:'install_windows', kw:['instalar windows','windows 11','instalacion windows','windows virtualbox','requisitos windows 11'],
      r:'Para instalar Windows 11 en VirtualBox se necesita: 4 GB de RAM mínimo (8 GB recomendado), 64 GB de disco, procesador de 1 GHz con 2 núcleos de 64 bits, TPM 2.0 y Secure Boot. El proceso: crear la VM con esas especificaciones, montar la ISO oficial de Microsoft y seguir el asistente eligiendo Instalación personalizada.' },

    { id:'windows_tpm', kw:['tpm','trusted platform module','secure boot','por que tpm','requisito tpm','tpm 2.0','que es tpm'],
      r:'TPM 2.0 (Trusted Platform Module) es un chip de seguridad que Microsoft exige para Windows 11. Almacena claves criptográficas y protege contra manipulación del arranque del sistema. Secure Boot verifica que solo software firmado digitalmente cargue con el sistema. En VirtualBox se habilitan ambos en la configuración de la VM antes de instalar.' },

    { id:'install_ubuntu', kw:['instalar ubuntu','ubuntu desktop','ubuntu linux virtualbox','ubuntu instalacion','linux escritorio virtualbox'],
      r:'Ubuntu (desktop) se instala en VirtualBox con al menos 2 GB de RAM (4 GB recomendado), 25 GB de disco y 2 núcleos. A diferencia de Windows 11, no requiere TPM ni Secure Boot. El asistente de instalación es gráfico y guía paso a paso: idioma, teclado, particionado automático y usuario.' },

    /* TERCER CORTE - UBUNTU SERVER */
    { id:'ubuntu_server_general', kw:['ubuntu server','servidor ubuntu','linux server','que es ubuntu server','servidor linux','para que sirve ubuntu server'],
      r:'Ubuntu Server 24.04 LTS es una distribución Linux para servidores desarrollada por Canonical. Sin interfaz gráfica, toda la administración es por CLI y SSH. Tiene kernel 6.8 y soporte garantizado hasta abril de 2029. Es ideal para servidores web, bases de datos y prácticas de administración de sistemas.' },

    { id:'virtualization_general', kw:['virtualizacion','que es virtualizar','hipervisor','vt-x','amd-v','virtualizacion hardware','como funciona la virtualizacion'],
      r:'La virtualización permite ejecutar múltiples sistemas operativos simultáneamente sobre un único hardware físico mediante entornos aislados (máquinas virtuales). VT-x (Intel) y AMD-V son extensiones de CPU para virtualización asistida por hardware, mejorando el rendimiento hasta un 30%. Se activan en la BIOS/UEFI.' },

    { id:'ubuntu_lts', kw:['lts','long term support','soporte largo plazo','noble numbat','ubuntu 24.04','que es lts','cuanto dura soporte ubuntu'],
      r:'LTS (Long Term Support) significa que Ubuntu 24.04 garantiza actualizaciones de seguridad durante 5 años (hasta 2029), o 10 con Extended Security Maintenance. Es crucial en servidores de producción donde no se puede cambiar de sistema operativo cada 9 meses como con versiones no-LTS.' },

    { id:'ubuntu_nogui', kw:['sin interfaz grafica','sin gui','sin escritorio','por que sin gui servidor','servidor sin grafico','linea comandos servidor','solo cli'],
      r:'Los servidores no instalan entorno gráfico por rendimiento y seguridad. Un escritorio GNOME consume 500 MB - 1 GB de RAM que el servidor necesita para atender solicitudes. Además, cada componente gráfico es una superficie de ataque adicional. La gestión por CLI también es más automatizable y reproducible.' },

    { id:'network_modes', kw:['nat','adaptador puente','solo anfitrion','modos red virtualbox','bridge','host only','modo red vm','redes virtualbox'],
      r:'VirtualBox tiene tres modos de red principales: NAT comparte la IP del host, la VM tiene internet pero no es visible en la LAN (requiere port forwarding para SSH). Adaptador Puente conecta la VM directamente a la red física con IP propia. Solo-Anfitrión crea una red aislada entre host y VMs sin internet, ideal para laboratorios de seguridad.' },

    { id:'port_forwarding', kw:['port forwarding','reenvio puertos','redireccion puertos','ssh nat','puerto 2222','conectar ssh nat','como ssh con nat'],
      r:'Con NAT en VirtualBox la VM no es accesible directamente por SSH. Se configura reenvío de puertos: mapear el puerto 2222 del host al puerto 22 de la VM. Luego conectarse con ssh -p 2222 usuario@127.0.0.1 desde el host. Con Adaptador Puente no es necesario: la conexión es directa a la IP de la VM.' },

    { id:'server_commands', kw:['comandos ubuntu server','comandos linux servidor','ip addr','df -h','free -h','comandos administracion servidor','comandos esenciales linux'],
      r:'Comandos esenciales en Ubuntu Server: sudo apt update && sudo apt upgrade -y (actualizar sistema), ip addr show (ver IP del servidor), df -h (espacio en disco), free -h (uso de RAM), systemctl status ssh (verificar SSH activo), hostnamectl (ver/cambiar nombre del servidor).' },

    { id:'apt_updates', kw:['apt','apt update','apt upgrade','instalar paquetes','actualizar ubuntu','gestor paquetes','apt get','apt install'],
      r:'apt es el gestor de paquetes de Ubuntu. sudo apt update sincroniza el índice de repositorios sin instalar nada. sudo apt upgrade -y aplica todas las actualizaciones. sudo apt install nombre instala un paquete nuevo. sudo apt autoremove elimina paquetes huérfanos. Ejecutar apt update && apt upgrade al arrancar es práctica de seguridad fundamental.' },

    { id:'ssh_general', kw:['ssh','secure shell','que es ssh','acceso remoto linux','protocolo ssh','para que sirve ssh','conexion remota servidor','como funciona ssh'],
      r:'SSH (Secure Shell) es el protocolo estándar de acceso remoto en servidores Linux. Proporciona un canal cifrado de extremo a extremo para ejecutar comandos remotamente, transferir archivos (SCP/SFTP) y redirigir puertos. Reemplaza a Telnet que transmitía credenciales en texto plano. Se conecta con ssh usuario@IP-del-servidor.' },

    { id:'ssh_security', kw:['seguridad ssh','fail2ban','puerto 22','root ssh','clave publica','ssh-keygen','fuerza bruta ssh','proteger ssh','configurar ssh seguro'],
      r:'Para proteger SSH: deshabilitar acceso root (PermitRootLogin no en /etc/ssh/sshd_config), usar autenticación por clave pública (ssh-keygen + ssh-copy-id), cambiar el puerto del 22 a uno no estándar, e instalar fail2ban para bloquear IPs con múltiples intentos fallidos de autenticación.' },

    { id:'ufw_firewall', kw:['ufw','firewall','uncomplicated firewall','cortafuegos','abrir puerto','bloquear puerto','reglas firewall','activar firewall linux'],
      r:'UFW (Uncomplicated Firewall) es la interfaz simplificada de iptables en Ubuntu. Implementa denegación de tráfico por defecto. Comandos clave: sudo ufw allow OpenSSH (permitir SSH antes de activar), sudo ufw enable (activar el firewall), sudo ufw status (ver reglas). Siempre permitir SSH antes de activar UFW para no bloquear la administración.' },

    { id:'static_ip', kw:['ip estatica','ip fija','netplan','configurar ip servidor','ip permanente','dhcp servidor','como poner ip fija ubuntu'],
      r:'Una IP estática es esencial en servidores porque si cambia se invalidan las reglas de firewall de otros equipos y los registros DNS. En Ubuntu Server 24.04 se configura editando /etc/netplan/00-installer-config.yaml, definiendo interfaz, IP con máscara (/24), puerta de enlace y DNS.' },

    { id:'disk_types', kw:['disco dinamico','disco fijo','diferencia disco vm','rendimiento disco vm','tipo disco virtualbox','vdi dinamico fijo'],
      r:'Disco dinámico en VirtualBox: crece con los datos de la VM, ahorra espacio en el host pero con ligera penalización en escrituras. Disco fijo: reserva todo el espacio al crearse, rendimiento más predecible y uniforme. Para laboratorios el dinámico es suficiente; en producción se prefiere el fijo.' },

    { id:'systemd', kw:['systemd','systemctl','servicios linux','gestionar servicios linux','daemon','pid 1','como gestionar servicios ubuntu'],
      r:'systemd es el sistema de inicio (PID 1) de Ubuntu Server 24.04. Gestiona todos los servicios. Comandos principales: systemctl start/stop/restart servicio, systemctl enable/disable servicio (inicio automático), systemctl status servicio (estado y logs recientes).' },

    { id:'kernels', kw:['kernel','nucleo sistema','kernel linux','kernel ubuntu','que es kernel','para que sirve kernel'],
      r:'El kernel es el núcleo del sistema operativo: gestiona el hardware, la planificación de procesos, la memoria virtual y los sistemas de archivos. Ubuntu Server 24.04 usa el kernel 6.8 con mejor soporte de hardware moderno y parches para Spectre/Meltdown. Los logs del kernel se consultan con dmesg o /var/log/kern.log.' },

    /* HERRAMIENTAS REMOTAS */
    { id:'remote_tools_general', kw:['herramientas soporte remoto','soporte remoto','control remoto escritorio','acceso remoto escritorio','asistencia remota','herramientas remotas'],
      r:'Las herramientas de soporte remoto permiten controlar un equipo a distancia transmitiendo la pantalla y eventos de teclado/ratón cifrados. Se dividen en pagas (TeamViewer, AnyDesk, Splashtop, Zoho Assist) y libres (RustDesk, Chrome Remote Desktop, AnyViewer, UltraVNC). La elección depende del presupuesto, plataformas y requisitos de seguridad.' },

    { id:'teamviewer', kw:['teamviewer','que es teamviewer','como funciona teamviewer','team viewer'],
      r:'TeamViewer (2005) es la plataforma de acceso remoto más establecida. Usa cifrado AES-256 con RSA-4096 y cumple ISO/IEC 27001, HIPAA y SOC 2/3. Soporta SSO, Wake-on-LAN y auditoría completa. Desventajas: costo elevado (desde USD 24,90/mes) y en 2024 sufrió intrusión atribuida al grupo APT29. Ideal para grandes departamentos de TI.' },

    { id:'anydesk', kw:['anydesk','que es anydesk','deskrt','como funciona anydesk','any desk'],
      r:'AnyDesk (2014) destaca por su rendimiento en conexiones lentas gracias al códec DeskRT, funcional con 1 Mbps. Usa TLS 1.2 con RSA-2048 y tiene huella menor que TeamViewer. En febrero de 2024 sufrió compromiso de sus sistemas de producción y en 2025 aumentó precios entre 26-40%.' },

    { id:'splashtop', kw:['splashtop','que es splashtop','para que sirve splashtop'],
      r:'Splashtop ofrece rendimiento empresarial a precios accesibles (desde USD 5/mes). Soporta hasta 4 monitores en 4K, audio remoto y cumple HIPAA, GDPR, SOC 2 y FERPA. Recomendada para pequeñas y medianas empresas que necesitan rendimiento sin la complejidad de TeamViewer.' },

    { id:'zoho_assist', kw:['zoho','zoho assist','que es zoho assist'],
      r:'Zoho Assist funciona desde el navegador sin instalación previa en el cliente. Se integra con el ecosistema Zoho (CRM, Desk). Cumple ISO/IEC 27001, GDPR, HIPAA y SOC 2. Planes desde USD 10/mes por técnico. Ideal para equipos pequeños de mesa de ayuda o consultores independientes de TI.' },

    { id:'rustdesk', kw:['rustdesk','rust desk','alternativa libre teamviewer','remoto codigo abierto','auto hospedar remoto'],
      r:'RustDesk es la alternativa libre más madura a TeamViewer y AnyDesk (AGPL v3, escrito en Rust). Permite auto-hospedar el servidor de relevo, manteniendo todo el tráfico en infraestructura propia. Usa cifrado NaCl con Ed25519 y P2P con UDP hole-punching. Disponible para Windows, macOS, Linux, iOS y Android.' },

    { id:'chrome_remote', kw:['chrome remote desktop','google remote','escritorio remoto chrome','chrome remoto','escritorio remoto google'],
      r:'Chrome Remote Desktop es la solución gratuita de Google, integrada con la cuenta Google. Usa WebRTC con TLS y autenticación Google (incluida verificación en 2 pasos). Instalación trivial sin configuración de puertos. Limitación: sin grabación de sesiones ni gestión centralizada empresarial.' },

    { id:'anyviewer', kw:['anyviewer','any viewer','aomei','que es anyviewer','aomei remoto'],
      r:'AnyViewer de AOMEI Technology es gratuito con hasta 3 dispositivos en el plan libre. Cifrado ECC de 256 bits. Interfaz similar a TeamViewer. Soporta sesiones atendidas y desatendidas. Solo disponible para Windows, iOS y Android (sin soporte Linux ni macOS completo).' },

    { id:'ultravnc', kw:['ultravnc','vnc','ultra vnc','que es vnc','virtual network computing','protocolo vnc'],
      r:'UltraVNC es una implementación libre (GNU GPL) del protocolo VNC. Arquitectura cliente-servidor directa sin servidores intermedios: el servidor escucha en el puerto 5900. Ideal para redes LAN internas o VPN. Soporta plugins AES, transferencia de archivos y despliegue por Group Policy. Solo para Windows.' },

    { id:'unattended_access', kw:['acceso desatendido','acceso sin usuario presente','riesgos acceso remoto','seguridad herramientas remotas','acceso nocturno remoto'],
      r:'El acceso desatendido es un vector de ataque permanente si no se protege. Buenas prácticas: usar contraseñas únicas y aleatorias por dispositivo, activar autenticación de dos factores, habilitarlo solo donde sea estrictamente necesario, registrar todas las sesiones y cerrarlas completamente al finalizar.' },

    /* DIAGNÓSTICO */
    { id:'diag_general', kw:['diagnostico hardware','herramientas diagnostico','diagnosticar equipo','revisar hardware','que herramientas usar diagnostico','comprobar hardware'],
      r:'Para diagnóstico de hardware se usan herramientas por categoría: CrystalDiskInfo y Hard Disk Sentinel para discos, MemTest86/MemTest86+ para RAM, HWMonitor y Core Temp para temperatura de CPU, y Recuva/PhotoRec para recuperación de archivos. La combinación de herramientas libres cubre la mayoría de escenarios sin costo.' },

    { id:'smart_analysis', kw:['smart','s.m.a.r.t','salud disco','sectores reasignados','reallocated sector','estado disco','disco fallando','fallo disco inminente'],
      r:'S.M.A.R.T. registra internamente métricas de salud en discos HDD, SSD y NVMe. Atributos clave: Reallocated Sector Count (sectores reasignados al reservorio de reemplazo), Uncorrectable Read Errors y Power On Hours. Sectores reasignados crecientes indican degradación: cuando se agota el reservorio, los datos se pierden. CrystalDiskInfo muestra estos datos con indicador de colores.' },

    { id:'crystaldiskinfo', kw:['crystaldiskinfo','crystal disk info','que es crystaldiskinfo','monitoreo disco','salud ssd hdd'],
      r:'CrystalDiskInfo (licencia MIT) es el estándar para monitoreo de salud de discos en Windows. Lee atributos S.M.A.R.T. y los muestra con colores: azul (saludable), amarillo (precaución), rojo (malo). Soporta SATA, NVMe y USB. No ejecuta pruebas activas, solo monitoreo pasivo.' },

    { id:'harddisk_sentinel', kw:['hard disk sentinel','hdd sentinel','herramienta disco pago','prediccion fallo disco'],
      r:'Hard Disk Sentinel es la versión comercial que va más allá de leer S.M.A.R.T.: ejecuta pruebas activas de superficie, escaneos de rendimiento y tiene un algoritmo propietario de predicción de fallos que estima el tiempo antes de la pérdida de datos. Disponible para Windows y Linux, con panel web opcional.' },

    { id:'memtest', kw:['memtest','memtest86','prueba ram','memoria defectuosa','testear ram','errores ram','diagnosticar memoria ram'],
      r:'MemTest86 y MemTest86+ prueban la RAM arrancando desde USB antes del sistema operativo. Ejecutan algoritmos de patrones de bits buscando celdas defectuosas. MemTest86 (PassMark) es la referencia con 13 algoritmos; MemTest86+ es la versión libre de código abierto. Las pruebas exhaustivas toman varias horas en sistemas con mucha RAM.' },

    { id:'hwmonitor', kw:['hwmonitor','hw monitor','temperatura cpu','monitoreo temperatura','sensores sistema','temperatura procesador','monitorear hardware'],
      r:'HWMonitor (CPUID) lee centralizadamente los sensores del sistema: voltajes, temperaturas de CPU por núcleo, GPU, discos vía S.M.A.R.T., velocidades de ventiladores y consumo energético en tiempo real. Es portable, consume menos de 30 MB de RAM. La versión Pro añade monitoreo remoto por TCP/IP.' },

    { id:'coretemp', kw:['core temp','coretemp','temperatura nucleos cpu','tj max','throttling termico','temperatura por nucleo procesador'],
      r:'Core Temp (ALCPU) está especializada en temperatura del procesador. Muestra la temperatura individual de cada núcleo, carga, frecuencia, voltaje (VCore) y la distancia al límite TJ Max, que es la temperatura a la que el procesador empieza a reducir frecuencia para protegerse (throttling). Consumo mínimo (~15 MB RAM).' },

    { id:'recuva', kw:['recuva','que es recuva','recuperar archivos windows','archivos borrados windows','como recuperar archivo borrado'],
      r:'Recuva (Piriform/Avast) recupera archivos con interfaz tipo asistente. Dos modos: escaneo rápido (consulta el sistema de archivos) y escaneo profundo sector a sector. Soporta FAT, exFAT y NTFS. La edición gratuita permite recuperación ilimitada. Menor desempeño en sistemas de archivos muy dañados; solo Windows.' },

    { id:'photorec', kw:['photorec','photo rec','file carving','tallado archivos','recuperacion libre multiplataforma','testdisk','recuperar disco formateado'],
      r:'PhotoRec (GNU GPL) recupera ~480 formatos de archivo mediante file carving: escanea bloque a bloque buscando firmas binarias, funcionando incluso con la tabla de particiones dañada o el disco formateado. Multiplataforma (Windows, macOS, Linux). Opera en modo solo lectura. Limitación: pierde los nombres originales y la estructura de carpetas.' },

    { id:'recovery_general', kw:['recuperar archivos','recuperacion datos','archivos eliminados','datos perdidos','como recuperar datos','disco formateado recuperar'],
      r:'Recuperar archivos es posible porque eliminar solo marca el espacio como disponible sin sobrescribir los datos físicos. Mientras los sectores no se reasignen, los archivos son recuperables. Para Windows con GUI: Recuva. Para casos graves (disco formateado, partición dañada): PhotoRec, que usa file carving y es multiplataforma. Lo más importante: dejar de escribir en el disco tan pronto como se detecte la pérdida.' },

    { id:'diagnosis_methodology', kw:['metodologia diagnostico','como diagnosticar problema','causa raiz','sintoma solucion','pasos diagnostico','resolver problema sistema','investigar fallo sistema'],
      r:'El diagnóstico estructurado va de lo general a lo específico: 1) Recopilar síntoma (cuándo, frecuencia, qué cambió), 2) Verificar conectividad (ping, traceroute), 3) Estado de servicios (systemctl status), 4) Almacenamiento (df -h, S.M.A.R.T.), 5) Recursos (htop, free -h), 6) Logs (journalctl -xe). Clave: distinguir síntoma de causa raíz.' },

    { id:'security_practices', kw:['buenas practicas seguridad','seguridad servidor','como proteger servidor','seguridad informatica basica','proteger sistema informatico'],
      r:'Las tres acciones de mayor impacto en seguridad de un servidor son: 1) Configurar firewall con política de denegación por defecto (UFW en Linux), 2) Mantener actualizaciones al día (el tiempo entre publicación de un CVE y su explotación masiva ha disminuido drásticamente), 3) Asegurar acceso remoto con clave criptográfica y sin acceso root directo por SSH.' },

    /* CONVERSACIONAL */
    { id:'how_are_you', kw:['como estas','como te va','que tal','como andas','todo bien','bien gracias','como estas hoy'],
      r:'¡Muy bien, gracias por preguntar! Estoy listo para ayudarte con cualquier duda sobre los temas del curso. Tengo información sobre comandos de Windows, instalación de sistemas operativos, Ubuntu Server, SSH, herramientas de soporte remoto, diagnóstico de hardware y mucho más. ¿Sobre qué te gustaría saber?' },

    { id:'what_can_you_do', kw:['que puedes hacer','que sabes','de que sabes','tus capacidades','para que sirves','que haces tu','ayudame','preguntarte'],
      r:'Puedo responder preguntas sobre todos los temas vistos en los tres cortes del curso: comandos CMD y PowerShell de Windows, instalación de sistemas operativos en VirtualBox, Ubuntu Server y administración de servidores, protocolos de red y SSH, herramientas de soporte remoto (TeamViewer, AnyDesk, RustDesk y más), diagnóstico de hardware (discos, RAM, CPU, temperatura) y recuperación de archivos. ¡Pregunta lo que necesites!' },

    /* CONCEPTOS GENERALES DE SO */
    { id:'what_is_os', kw:['que es sistema operativo','que es un so','para que sirve sistema operativo','definicion sistema operativo','concepto so'],
      r:'Un sistema operativo (SO) es el software fundamental que gestiona el hardware del computador y permite que las aplicaciones funcionen. Actúa como intermediario entre el usuario, los programas y los recursos físicos (CPU, memoria, almacenamiento y dispositivos). Los principales son Windows, Linux y macOS.' },

    { id:'os_types', kw:['tipos de sistemas operativos','clasificacion so','so monousuario','so multiusuario','so multitarea','tipos so'],
      r:'Los sistemas operativos se clasifican por: usuarios (monousuario como MS-DOS vs. multiusuario como Linux), tareas (monotarea vs. multitarea), tiempo de respuesta (tiempo real, batch, tiempo compartido) y propósito (escritorio, servidor, embebido, móvil). Windows es principalmente monousuario de escritorio; Linux es multiusuario y multitarea.' },

    { id:'windows_vs_linux', kw:['diferencia windows linux','windows vs linux','cual es mejor windows linux','comparar windows linux','ventajas linux windows'],
      r:'Windows es propietario, de pago, con interfaz gráfica madura y gran compatibilidad de software comercial. Domina en escritorio. Linux es código abierto, gratuito, altamente personalizable y domina en servidores, supercomputadores y nube. Linux es más estable y seguro en entornos servidor; Windows tiene mayor adopción en equipos personales y empresas.' },

    { id:'open_source', kw:['codigo abierto','open source','que es open source','software libre','gpl','licencia open source','diferencia libre propietario'],
      r:'El software de código abierto (open source) tiene su código fuente disponible públicamente para que cualquiera pueda verlo, modificarlo y distribuirlo, sujeto a los términos de su licencia (GPL, MIT, AGPL, etc.). Ejemplos en el curso: Linux, RustDesk (AGPL), MemTest86+ (GPL), PhotoRec (GPL), UltraVNC (GPL) y CrystalDiskInfo (MIT).' },

    { id:'file_systems', kw:['sistema archivos','ntfs','fat32','exfat','ext4','que es ntfs','que es fat','sistema de archivos','formato disco'],
      r:'Los sistemas de archivos organizan cómo se almacenan los datos en disco. NTFS (Windows) soporta permisos, cifrado y archivos >4 GB. FAT32 es universal pero limita archivos a 4 GB. exFAT es el sucesor de FAT32 para dispositivos externos. ext4 es el estándar de Linux con journaling para recuperación ante fallos. icacls gestiona permisos NTFS desde CMD.' },

    { id:'hypervisor_types', kw:['hipervisor tipo 1','hipervisor tipo 2','diferencia hipervisor','bare metal','hosted hypervisor','vmware esxi','hyper-v virtualbox'],
      r:'Los hipervisores de tipo 1 (bare metal) como VMware ESXi o Hyper-V se ejecutan directamente sobre el hardware sin sistema operativo anfitrión; son más eficientes para producción. Los hipervisores de tipo 2 (hosted) como VirtualBox se ejecutan sobre un SO anfitrión como una aplicación más; son ideales para laboratorios académicos por su facilidad de instalación y uso.' },

    { id:'uefi_bios', kw:['uefi','bios','diferencia uefi bios','que es uefi','que es bios','firmware arranque','secure boot bios'],
      r:'BIOS (Basic Input/Output System) es el firmware tradicional de arranque, limitado a discos de hasta 2 TB y sin soporte gráfico nativo. UEFI (Unified Extensible Firmware Interface) es su sucesor: soporta discos GPT mayores a 2 TB, tiene interfaz gráfica, arranque más rápido y Secure Boot (que Windows 11 requiere). VirtualBox puede configurarse para arrancar en modo UEFI o BIOS según la VM.' },

    { id:'snapshots', kw:['snapshot','instantanea vm','guardar estado vm','restaurar vm','checkpoint virtualbox','snapshot virtualbox'],
      r:'Un snapshot en VirtualBox captura el estado completo de una máquina virtual en un momento dado: disco, RAM y configuración. Permite revertir la VM a ese estado exacto en segundos, lo que es muy útil antes de prácticas que puedan dañar el sistema. Es una de las ventajas clave de la virtualización para entornos de laboratorio y pruebas.' },

    { id:'encryption', kw:['cifrado','encriptacion','aes','rsa','que es aes','que es rsa','cifrado aes 256','cifrado rsa','tls','ssl','criptografia'],
      r:'AES (Advanced Encryption Standard) es un cifrado simétrico: usa la misma clave para cifrar y descifrar. Es rápido y se usa para el canal de datos (AES-256 = clave de 256 bits). RSA es asimétrico: usa par de claves pública/privada, más lento pero ideal para intercambio seguro de claves. SSH, TeamViewer, AnyDesk y todas las herramientas remotas vistas usan AES para el canal y RSA o similares para la autenticación.' },

    { id:'cve', kw:['cve','vulnerabilidad','exploit','parche seguridad','que es cve','vulnerabilidades conocidas','base de datos vulnerabilidades'],
      r:'CVE (Common Vulnerabilities and Exposures) es una base de datos pública de vulnerabilidades de seguridad conocidas. Cada CVE tiene un identificador único (ej: CVE-2024-1234) y describe la vulnerabilidad, su severidad y los parches disponibles. El tiempo entre la publicación de un CVE y su explotación masiva ha disminuido drásticamente, por eso mantener el sistema actualizado es una práctica de seguridad crítica.' },

    { id:'process_scheduling', kw:['planificacion procesos','scheduling','scheduler','que es el scheduler','gestion procesos','cpu scheduling','multitarea como funciona'],
      r:'El scheduler (planificador) del kernel decide qué proceso usa la CPU y cuándo. Los algoritmos principales son: Round Robin (turno rotativo con quantum de tiempo), FCFS (primero en llegar, primero en ser atendido), SJF (proceso más corto primero) y prioridades. Linux usa el CFS (Completely Fair Scheduler). En VirtualBox, el scheduler del hipervisor asigna tiempo de CPU física a las vCPUs de las VMs.' },

    { id:'memory_management', kw:['gestion memoria','memoria virtual','paginacion','swap','que es swap','memoria ram so','como gestiona el so la memoria'],
      r:'El SO gestiona la memoria asignando y liberando RAM a los procesos. La memoria virtual permite que los procesos usen más memoria de la físicamente disponible usando swap (espacio en disco como RAM temporal). La paginación divide la memoria en bloques de tamaño fijo (páginas). El exceso de swap ralentiza el sistema severamente, por eso es importante asignar suficiente RAM a las VMs.' },

    { id:'raid', kw:['raid','que es raid','raid 0','raid 1','raid 5','redundancia disco','arreglo discos'],
      r:'RAID (Redundant Array of Independent Disks) combina múltiples discos físicos para mejorar rendimiento o redundancia. RAID 0 (striping) mejora velocidad pero sin redundancia. RAID 1 (mirroring) duplica datos en dos discos para tolerancia a fallos. RAID 5 combina rendimiento y redundancia con paridad distribuida. En diagnóstico de hardware, Hard Disk Sentinel soporta monitoreo de discos en arreglos RAID.' },

    { id:'partition_table', kw:['tabla particiones','mbr','gpt','que es gpt','que es mbr','particion primaria','particion logica','esquema particion'],
      r:'MBR (Master Boot Record) es el esquema de particiones antiguo, limitado a 4 particiones primarias y discos de hasta 2 TB. GPT (GUID Partition Table) es el moderno: soporta hasta 128 particiones, discos de varios PB y es necesario para arranque UEFI. Windows 11 requiere GPT. En el laboratorio, diskpart y Get-Disk/Get-Partition permiten gestionar ambos esquemas.' },

    { id:'tcp_ip', kw:['tcp ip','protocolo tcp','protocolo ip','modelo osi','que es tcp','que es ip','capas red','pila de red'],
      r:'TCP/IP es la suite de protocolos base de internet. IP gestiona el direccionamiento (quién es quién en la red). TCP garantiza la entrega ordenada de datos. SSH usa TCP en el puerto 22. ping usa ICMP. Los comandos ipconfig, ping, tracert y Test-NetConnection del primer corte trabajan directamente con esta pila de protocolos.' },

    { id:'dns_general', kw:['dns','que es dns','domain name system','como funciona dns','servidor dns','resolucion nombres','dominio ip'],
      r:'DNS (Domain Name System) traduce nombres de dominio legibles (google.com) a direcciones IP numéricas (142.250.x.x). El comando ipconfig /flushdns limpia la caché local de DNS. Si hay problemas accediendo a un sitio por nombre pero la IP funciona, suele ser un problema de DNS. Los servidores DNS se configuran en Netplan en Ubuntu Server.' },

    { id:'powershell_vs_cmd', kw:['diferencia powershell cmd','powershell vs cmd','cuando usar powershell','cuando usar cmd','ventajas powershell','que es powershell'],
      r:'CMD (Command Prompt) es el intérprete de comandos clásico de Windows, más limitado. PowerShell es una shell moderna y un lenguaje de scripting completo basado en objetos .NET. PowerShell devuelve objetos que pueden filtrarse y manipularse (Get-Process | Where-Object), mientras CMD devuelve texto plano. Para administración avanzada de Windows se prefiere PowerShell.' },

    { id:'three_cortes_summary', kw:['resumen cortes','de que trata cada corte','que se vio en cada corte','contenido tres cortes','resumen curso','temas del curso'],
      r:'Resumen de los tres cortes: Primer corte — comandos CMD y PowerShell para mantenimiento de Windows (sfc, dism, chkdsk, tasklist, ipconfig, net user, servicios, limpieza). Segundo corte — instalación de Windows 11 y Ubuntu Linux en VirtualBox con sus requisitos (TPM, RAM, disco). Tercer corte — Ubuntu Server, virtualización, SSH seguro, herramientas de soporte remoto y diagnóstico de hardware.' },

    { id:'fallback', kw:[],
      r:'No encontré información específica sobre eso en mi base de conocimiento. Intenta reformular tu pregunta o pregunta sobre temas como: comandos CMD/PowerShell, instalación de Windows o Ubuntu, Ubuntu Server, SSH, modos de red en VirtualBox, herramientas de soporte remoto (TeamViewer, AnyDesk, RustDesk...) o diagnóstico de hardware (S.M.A.R.T., MemTest86, CrystalDiskInfo...).' }
  ];

  /* ── 2. MOTOR NLP ── */
  const STOPWORDS = new Set([
    'que','es','un','una','el','la','los','las','de','del','en','y','a','o',
    'como','se','su','por','con','para','al','lo','le','si','me','yo','tu',
    'no','hay','tiene','son','ser','fue','mas','pero','esto','esta','eso',
    'cual','cuando','donde','quien','porque','mi','te','nos','sus','puedo',
    'puedes','puede','podria','sobre','hace','hacer','tengo','tenemos',
    'dime','explicame','cuales','cuanto','cuantos','hay','ahi'
  ]);

  function normalize(s) {
    return s.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g,'')
      .replace(/[^a-z0-9\s]/g,' ')
      .replace(/\s+/g,' ').trim();
  }

  function classify(input) {
    const norm = normalize(input);
    const tokens = norm.split(' ').filter(t => t.length > 1 && !STOPWORDS.has(t));
    if (!tokens.length) return KB[KB.length - 1]; // fallback

    let best = null, bestScore = 0;

    for (const intent of KB) {
      if (!intent.kw.length) continue; // skip fallback in loop
      let score = 0;
      for (const kw of intent.kw) {
        const nkw = normalize(kw);
        if (norm.includes(nkw)) {
          // Full keyword match: weight by length (longer = more specific)
          score += 2 + nkw.split(' ').length;
        } else {
          // Partial: check each word of the keyword against user tokens
          for (const w of nkw.split(' ')) {
            if (w.length >= 4 && (norm.includes(w) || tokens.some(t => t.length >= 4 && t.includes(w)))) {
              score += 1;
            }
          }
        }
      }
      if (score > bestScore) { bestScore = score; best = intent; }
    }

    return (bestScore >= 3 && best) ? best : KB[KB.length - 1];
  }

  /* ── 3. ELEMENTOS DEL DOM ── */
  const chatHistory = document.getElementById('chat-history');
  const avInput     = document.getElementById('av-input');
  const avSend      = document.getElementById('av-send');
  const avatarImg   = document.getElementById('avatar-img');
  const statusDot   = document.getElementById('status-dot');
  const statusText  = document.getElementById('status-text');

  const IDLE_SRC = avatarImg.src; // ya apunta a Idle
  const TALK_SRC = IDLE_SRC.replace('001_White_Idle.png','001_White_Talk.png');

  let talkTimer = null;
  let talkFrame = false;
  let isBusy = false;

  function startTalking() {
    talkFrame = false;
    statusDot.classList.add('active');
    statusText.textContent = 'RESPONDIENDO';
    talkTimer = setInterval(() => {
      talkFrame = !talkFrame;
      avatarImg.src = talkFrame ? TALK_SRC : IDLE_SRC;
      avatarImg.classList.toggle('talking', talkFrame);
    }, 180);
  }

  function stopTalking() {
    clearInterval(talkTimer); talkTimer = null;
    avatarImg.src = IDLE_SRC;
    avatarImg.classList.remove('talking');
    statusDot.classList.remove('active');
    statusText.textContent = 'EN ESPERA';
  }

  /* ── 4. UI DEL CHAT ── */
  function appendMsg(text, role) {
    const wrap = document.createElement('div');
    wrap.className = 'av-msg av-msg-' + role;
    const label = document.createElement('span');
    label.className = 'av-msg-label';
    label.textContent = role === 'user' ? 'TÚ' : 'SYS';
    const bubble = document.createElement('span');
    bubble.className = 'av-msg-bubble';
    if (text) bubble.textContent = text;
    wrap.appendChild(label);
    wrap.appendChild(bubble);
    chatHistory.appendChild(wrap);
    chatHistory.scrollTop = chatHistory.scrollHeight;
    return bubble;
  }

  function typeWrite(text, el, onDone) {
    const words = text.split(' ');
    let i = 0;
    startTalking();
    const iv = setInterval(() => {
      if (i < words.length) {
        el.textContent += (i === 0 ? '' : ' ') + words[i++];
        chatHistory.scrollTop = chatHistory.scrollHeight;
      } else {
        clearInterval(iv);
        stopTalking();
        isBusy = false;
        avSend.disabled = false;
        avInput.disabled = false;
        avInput.focus();
        if (onDone) onDone();
      }
    }, 95);
  }

  function handleSend() {
    const raw = avInput.value.trim();
    if (!raw || isBusy) return;

    // Quitar pantalla de bienvenida si existe
    const intro = chatHistory.querySelector('.av-intro');
    if (intro) intro.remove();

    isBusy = true;
    avSend.disabled = true;
    avInput.disabled = true;
    avInput.value = '';

    appendMsg(raw, 'user');

    // Pequeño delay antes de responder (simula procesamiento)
    setTimeout(() => {
      const intent = classify(raw);
      const bubble = appendMsg('', 'bot');
      typeWrite(intent.r, bubble);
    }, 400);
  }

  avSend.addEventListener('click', handleSend);
  avInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSend();
  });

  /* ── Ocultar scan-line cuando pasa sobre el libro ── */
  const scanLine = document.querySelector('.scan-line');
  const libroEl  = document.querySelector('.lb-section');
  if (scanLine && libroEl) {
    let hidden = false;
    (function loop() {
      const sl = scanLine.getBoundingClientRect();
      const lb = libroEl.getBoundingClientRect();
      const overlaps = sl.top < lb.bottom && sl.bottom > lb.top;
      if (overlaps && !hidden)       { scanLine.style.opacity = '0'; hidden = true; }
      else if (!overlaps && hidden)  { scanLine.style.opacity = '';  hidden = false; }
      requestAnimationFrame(loop);
    })();
  }

})();
</script>
