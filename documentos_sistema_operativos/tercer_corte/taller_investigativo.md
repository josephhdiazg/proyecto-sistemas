1

Universidad Santo Tomás - Villavicencio

Programa de Ingeniería en Sistemas

Soporte Técnico Remoto, Virtualización y Diagnóstico de Sistemas

Taller Investigativo

Presentado por:

Michael David Arias Torres

Docente:

Omar Camilo Santiago Garcia

Asignatura:

Sistemas Operativos

Villavicencio, Meta

Mayo de 2026

2

INTRODUCCIÓN

La administración de sistemas informáticos modernos exige un conjunto de competencias

que trascienden la simple operación de software. El técnico actual debe comprender la arquitectura

de  virtualización,  los  mecanismos  de  comunicación  remota  y  los  métodos  instrumentados  de

diagnóstico de hardware. Estas tres áreas no son independientes, un servidor virtualizado requiere

diagnóstico de sus recursos físicos, y ese diagnóstico se ejecuta, con frecuencia, a través de una

sesión SSH o una herramienta de escritorio remoto.

La  virtualización  en  particular,  cambió  la  relación  entre  el  hardware  y  el  software  de

manera  estructural.  Donde  antes  un  servidor  físico  albergaba  un  único  sistema  operativo,  hoy

puede  ejecutar  decenas  de  máquinas  virtuales  aisladas,  cada  una  con  su  propio  kernel,  red  y

almacenamiento. Esto multiplicó la capacidad de los centros de datos y, al mismo tiempo, introdujo

nuevas exigencias de administración. Según Tanenbaum y Bos (2015), la virtualización a nivel de

hardware  depende  de  extensiones  específicas  del  procesador  que  permiten  la  ejecución  de

instrucciones privilegiadas en un contexto controlado por el hipervisor.

El presente ensayo responde a los interrogantes planteados en el taller investigativo de la

asignatura, articulando las respuestas en un discurso técnico coherente que integra teoría, práctica

y herramientas. Se abordan la virtualización y sus tecnologías de soporte, el uso de VirtualBox en

entornos académicos, los sistemas operativos de servidor, las redes y el acceso remoto, el soporte

técnico  remoto  con  herramientas  especializadas,  el  diagnóstico  de  hardware,  y  finalmente  la

seguridad y las buenas prácticas profesionales.

3

DESARROLLO

Virtualización y Sistemas Operativos

La virtualización es fundamental en entornos de prueba porque permite desplegar y destruir

entornos  controlados  sin  afectar  el  hardware  subyacente.  Un  desarrollador  puede  instalar  una

distribución de Linux experimental, probar un parche de kernel o simular una falla de disco sin

arriesgar el sistema anfitrión. En entornos de servidor la virtualización permite consolidar cargas

de trabajo, varios servidores lógicos coexisten en un mismo equipo físico, lo que reduce costos de

energía,  espacio  y  mantenimiento  (Smith  &  Nair,  2005).  Esto  es  especialmente  relevante  en

infraestructuras  universitarias  y  empresas  medianas,  donde  el  presupuesto  para  hardware  es

limitado.

Las tecnologías VT-x y AMD-V son extensiones del conjunto de instrucciones x86 que

habilitan la virtualización asistida por hardware. Sin estas extensiones, el hipervisor debe recurrir

a la traducción binaria o a la paravirtualización, mecanismos que introducen una sobrecarga de

rendimiento significativa. Con VT-x o AMD-V activas en la BIOS, el procesador puede manejar

directamente las instrucciones privilegiadas del sistema operativo huésped, reduciendo la latencia

de conmutación de contexto y mejorando el rendimiento de operaciones intensivas de CPU (Intel

Corporation, 2023). La diferencia en benchmarks de operaciones de punto flotante o acceso a disco

entre un entorno con y sin virtualización asistida por hardware puede superar el 30 %.

4

Virtualizar  un  servidor  difiere  sustancialmente  de  virtualizar  un  escritorio.  Un  servidor

virtualizado prioriza la estabilidad, la disponibilidad de red, el rendimiento de entrada/salida y la

ausencia  de  interfaz  gráfica.  Los  recursos  asignados  son  estáticos  y  calculados  para  garantizar

acuerdos de nivel de servicio (SLA). Un escritorio virtual, en cambio, requiere aceleración gráfica,

soporte de dispositivos USB, controladores de audio y una experiencia de usuario interactiva. En

términos de configuración de red, los servidores virtuales suelen operar con adaptadores en modo

puente para tener presencia directa en la red LAN, mientras que los escritorios virtuales en entornos

de laboratorio operan frecuentemente con NAT (Popek & Goldberg, 1974).

Uso de VirtualBox y Máquinas Virtuales

VirtualBox  es  adecuado  para  entornos  académicos  y  de  laboratorio  por  varias  razones

concretas, como que es software libre (licencia GPL para uso personal/educativo), multiplataforma

(Windows,  Linux,  macOS),  cuenta  con  una  interfaz  gráfica  accesible  y  soporta  exportación  e

importación  de  máquinas  en  formato  OVA,  lo  que  facilita  la  distribución  de  entornos

preconfigurados entre estudiantes. Además, su soporte de snapshots permite capturar el estado de

una máquina antes de una práctica destructiva y revertirla en segundos (Oracle Corporation, 2024).

Herramientas  empresariales  como  VMware  ESXi  o  Hyper-V,  aunque  más  potentes,  requieren

licencias  costosas  y  configuración  de  infraestructura  que  excede  el  alcance  de  un  laboratorio

universitario.

5

Asignar incorrectamente RAM, CPU y disco a una máquina virtual tiene consecuencias

directas sobre el rendimiento del sistema anfitrión y del huésped. Si se asigna más RAM de la

disponible físicamente, el  sistema operativo  anfitrión comenzará a usar espacio  de intercambio

(swap),  degradando  drásticamente  el  rendimiento  general.  Si  se  asignan  demasiados  núcleos

virtuales de CPU, el scheduler del hipervisor deberá gestionar un número de vCPUs superior a los

núcleos físicos disponibles, generando contención y latencia. En cuanto al disco, una asignación

insuficiente puede provocar errores de espacio en tiempo de ejecución que corrompan bases de

datos o instalaciones del sistema operativo huésped (Tanenbaum & Bos, 2015).

La diferencia entre disco dinámico y disco de tamaño fijo es relevante tanto en rendimiento

como en gestión del almacenamiento. Un disco dinámico ocupa en el sistema de archivos anfitrión

únicamente  el  espacio  realmente  utilizado  por  el  huésped,  creciendo  a  medida  que  se  escriben

datos. Esto ahorra espacio en disco, pero introduce una pequeña sobrecarga de escritura porque el

sistema de archivos debe expandir el archivo de imagen continuamente. Un disco de tamaño fijo

reserva todo el espacio declarado desde el momento de la creación. Esto elimina la sobrecarga de

expansión  y  produce  un  rendimiento  de  escritura  más  predecible,  a  costa  de  consumir  espacio

desde el inicio, incluso si el huésped no lo usa todavía (Oracle Corporation, 2024).

Sistemas Operativos de Servidor

LTS  significa  Long-Term  Support,  y  en  el  contexto  de  Ubuntu  Server  implica  que

Canonical  garantiza actualizaciones de seguridad y mantenimiento durante cinco años desde la

6

fecha de publicación (diez años con el plan Extended Security Maintenance). En entornos críticos,

esto  es  determinante,  ya  que  un  administrador  no  puede  actualizar  el  sistema  operativo  de  un

servidor de producción cada seis meses sin planificar ventanas de mantenimiento extensas y asumir

riesgos de incompatibilidad. Ubuntu Server 22.04 LTS, por ejemplo, está soportado hasta abril de

2027, lo que permite construir sobre él infraestructuras de larga vida con garantías de parches de

seguridad continuos (Canonical, 2022). La estabilidad del paquete base no cambia abruptamente

entre versiones  menores, lo  que facilita la automatización  de configuraciones con herramientas

como Ansible o Chef.

Los servidores no instalan entorno gráfico por razones de rendimiento, seguridad y filosofía

de diseño. Cada componente gráfico de un servidor X, gestor de ventanas, compositor, consume

RAM, ciclos de CPU y abre superficies de ataque adicionales. Un servidor bien administrado se

opera exclusivamente desde la línea de comandos, local o remotamente. La ausencia de entorno

gráfico también obliga al administrador a conocer a fondo las herramientas de terminal, lo que

resulta en una operación más reproducible y automatizable. Comandos como htop, netstat, df, iotop

y journalctl  proveen toda la información  de diagnóstico necesaria sin  la intermediación  de una

interfaz visual (Nemeth et al., 2017).

El  kernel  es  el  núcleo  del  sistema  operativo,  que  gestiona  el  acceso  al  hardware,  el

scheduling  de  procesos,  la  memoria  virtual,  los  sistemas  de  archivos  y  la  comunicación  entre

procesos. Su estabilidad determina directamente la estabilidad del sistema completo. En Ubuntu

Server  LTS,  el  kernel  recibe  actualizaciones  regulares  de  seguridad,  pero  su  versión  base  no

cambia  entre  actualizaciones  menores,  lo  que  garantiza  compatibilidad  con  controladores  y

7

módulos compilados. Cuando se requiere una versión más nueva del kernel por compatibilidad

con hardware reciente, se puede instalar el kernel HWE (Hardware Enablement Stack) sin salir del

soporte LTS (Canonical, 2022). La gestión del kernel en producción incluye monitorear los logs

del sistema (dmesg, /var/log/kern.log) para detectar errores de hardware que el sistema operativo

registra antes de que se manifiesten como fallas en aplicaciones.

Redes y Acceso Remoto

Los tres modos de red más comunes en VirtualBox operan de maneras fundamentalmente

distintas. NAT (Network Address Translation) permite que la máquina virtual acceda a internet a

través de la IP del anfitrión, pero no es accesible desde la red local ni desde otras máquinas virtuales

sin  configurar  reglas  de  reenvío  de  puertos.  El  adaptador  en  modo  puente  conecta  la  máquina

virtual directamente a la red física, asignándole una IP del mismo segmento que el anfitrión; esto

la hace visible en la LAN y permite comunicación directa con otros equipos. La red solo-anfitrión

(host-only) crea una red aislada entre el anfitrión y las máquinas virtuales, sin acceso a internet; es

ideal para laboratorios donde se necesita comunicación entre VMs sin exposición externa (Oracle

Corporation, 2024).

SSH (Secure Shell) es esencial para la administración de servidores porque proporciona un

canal cifrado de extremo a extremo para ejecutar comandos remotamente. A diferencia de Telnet,

que  transmite  datos  en  texto  plano,  SSH  usa  criptografía  asimétrica  para  la  autenticación  y

criptografía simétrica para el cifrado del canal. La versión 2 del protocolo, estandarizada en RFC

4251,  elimina  las  vulnerabilidades  de  la  versión  original  (Ylonen  &  Lonvick,  2006).  Mediante

SSH es posible ejecutar comandos, transferir archivos (SCP/SFTP), redirigir puertos y establecer

túneles seguros. En un servidor sin entorno gráfico, SSH es el único mecanismo de acceso remoto

estándar.

8

Una  conexión  remota  mal  configurada  puede  comprometer  la  totalidad  de  la

infraestructura. Los riesgos más frecuentes incluyen lo  que es el  uso de contraseñas débiles en

lugar de llaves SSH, la exposición del puerto 22 directamente a internet sin restricciones de IP, la

habilitación del acceso de root por SSH, y la ausencia de logs de auditoría. Un atacante con acceso

a un servidor mal configurado puede instalar rootkits, exfiltrar datos o usar el servidor como punto

de  pivote  para  atacar  otros  sistemas  de  la  red  interna.  Medidas  básicas  de  mitigación  incluyen

deshabilitar  el  acceso  root  por  SSH,  usar  autenticación  por  clave  pública,  cambiar  el  puerto

predeterminado, y configurar fail2ban para bloquear intentos de fuerza bruta (Nemeth et al., 2017).

Soporte Técnico Remoto

AnyDesk  y  TeamViewer  operan  sobre  protocolos  propietarios  de  escritorio  remoto  que

transmiten  el  contenido  de  la  pantalla  del  equipo  controlado  hacia  el  técnico,  y  los  eventos  de

teclado y ratón en sentido inverso. Ambas herramientas utilizan compresión de video adaptativa

para  reducir  el  ancho  de  banda  requerido,  y  cifrado  TLS/AES-256  para  proteger  la  sesión.

AnyDesk usa su propio protocolo DeskRT, optimizado para minimizar la latencia en conexiones

de baja velocidad mediante predicción de movimiento y codificación diferencial de fotogramas

(AnyDesk Software GmbH, 2023). TeamViewer establece una sesión a través de sus servidores

de mediación cuando no hay conectividad directa entre los equipos, usando NAT traversal para

atravesar firewalls corporativos.

9

Existen varios niveles de acceso remoto según el grado de control que se otorga al técnico.

El acceso asistido requiere la presencia activa del usuario en el equipo remoto, quien debe aceptar

la  conexión  y  puede  observar  todas  las  acciones  del  técnico.  El  acceso  desatendido  permite

conectarse sin que haya nadie frente al equipo, útil para mantenimiento nocturno o administración

de servidores sin monitor. El acceso por SSH no interactivo permite ejecutar scripts automatizados

sin intervención humana. Finalmente, el acceso con elevación de privilegios (sudo o equivalente

en Windows con UAC) es necesario cuando la tarea requiere modificar configuración de sistema.

Cada nivel debe aplicarse según el principio de mínimo privilegio, otorgar únicamente el acceso

que la tarea específica requiere.

El acceso  desatendido implica riesgos  de seguridad considerables si  no se implementan

controles  adecuados.  Un  dispositivo  con  acceso  desatendido  habilitado  es  un  vector  de  ataque

permanente,  debido  a  que  si  la  contraseña  de  acceso  es  débil  o  la  herramienta  tiene  una

vulnerabilidad, un atacante puede controlar el equipo en cualquier momento sin dejar rastro obvio

para el usuario final. Las buenas prácticas incluyen usar contraseñas generadas aleatoriamente y

únicas  por  dispositivo,  habilitar  el  acceso  desatendido  únicamente  en  equipos  donde  sea

estrictamente necesario, registrar todas las sesiones remotas, y usar autenticación de dos factores

cuando la herramienta lo permita (AnyDesk Software GmbH, 2023).

Diagnóstico de Hardware

10

CPU-Z es una herramienta de diagnóstico pasivo que lee registros internos del procesador,

chipset  y  módulos  de  memoria  para  reportar  sus  especificaciones  exactas:  frecuencia  real,

multiplicador, tensión, latencias de RAM (CL, tRCD, tRP, tRAS), tipo de memoria y capacidad

por canal. Esta información permite verificar si el hardware opera dentro de las especificaciones

del  fabricante  o  si  hay  componentes  mal  configurados  en  la  BIOS  (CPUID,  2024).  OCCT

(OverClock  Checking  Tool)  ejecuta  pruebas  de  estrés  sobre  CPU,  GPU  y  fuente  de  poder,

sometiendo los componentes a carga máxima sostenida para detectar inestabilidades térmicas o

errores  de  cálculo  que  no  aparecen  en  uso  normal.  CrystalDiskInfo  monitorea  los  atributos

SMART de discos duros y SSD, mostrando temperatura, sectores reasignados, errores de lectura

y horas de operación acumuladas.

La  identificación  de  fallas  en  RAM  se  realiza  principalmente  con  herramientas  como

MemTest86,  que  escribe  patrones  de  bits  en  toda  la  memoria  y  verifica  que  sean  leídos

correctamente. Un error indica una celda de memoria defectuosa. Las fallas de CPU se detectan

mediante  pruebas  de  estrés  con  OCCT  o  Prime95,  que  ejecutan  operaciones  matemáticas

complejas  y  comparan  los  resultados  con  valores  de  referencia.  Errores  de  cálculo  bajo  carga

pueden  indicar  un  procesador  con  defecto  de  fabricación,  refrigeración  insuficiente  o  tensión

inestable (CPUID, 2024). Las fallas de disco se detectan mediante el análisis SMART, la ejecución

de  pruebas  de  superficie  con  CrystalDiskInfo  o  herramientas  del  fabricante  (SeaTools  para

Seagate, Data Lifeguard para WD), y la observación de tiempos de respuesta anómalos.

11

El  análisis  SMART  (Self-Monitoring,  Analysis  and  Reporting  Technology)  es  un

protocolo implementado en discos duros y SSD desde la década de 1990 que registra internamente

métricas de salud del dispositivo. Atributos como el número de sectores reasignados (Reallocated

Sector Count), los errores de lectura no corregibles (Uncorrectable Read Errors) y el conteo de

horas de operación (Power On Hours) son indicadores predictivos de falla. Un disco con sectores

reasignados crecientes está en proceso de degradación: el firmware reemplaza sectores defectuosos

con  sectores  de  reserva,  pero  cuando  la  reserva  se  agota,  los  datos  se  pierden.  Detectar  este

deterioro a tiempo permite realizar una copia de seguridad y reemplazar el disco antes de la falla

total (Birnbaum & Gurney, 2001).

Análisis de Incidentes Reales

En un entorno académico remoto, los fallos suelen originarse en tres categorías: problemas

de red, problemas de recursos, y errores de configuración del sistema operativo. La interacción

entre estas categorías puede complicar el diagnóstico, un servicio que no responde puede deberse

tanto a un fallo del proceso como a un problema de red que impide la comunicación.

Un diagnóstico técnico completo sigue una metodología estructurada que va de lo general

a lo específico. Primero se recopila información del síntoma: cuándo ocurrió, con qué frecuencia,

qué cambió en el sistema antes de la falla. Luego se verifica el estado de los componentes en orden

lógico, conectividad de red (ping, traceroute), estado de servicios (systemctl status), integridad del

almacenamiento (SMART, df -h), uso de recursos (htop, iotop) y logs del sistema (journalctl -xe).

Este proceso descarta causas de manera sistemática hasta aislar la causa raíz (Nemeth et al., 2017).

12

La  distinción  entre  síntoma,  causa  raíz  y  solución  es  conceptualmente  fundamental.  El

síntoma es la manifestación observable del problema, el servicio web no responde. La causa raíz

es el origen técnico del síntoma, el proceso del servidor web terminó porque el disco estaba lleno

y no pudo escribir logs. La solución es la acción que elimina la causa raíz, como liberar espacio

en disco, configurar rotación de logs y reiniciar el servicio. Tratar únicamente el síntoma resuelve

el problema de forma temporal, por lo que el fallo reaparecerá en minutos. La causa raíz, a su vez,

puede tener una causa subyacente que conviene registrar para implementar medidas preventivas.

Seguridad y Buenas Prácticas

Configurar correctamente el firewall, mantener actualizaciones al día y asegurar el acceso

remoto son las tres acciones de seguridad de mayor impacto en un servidor. El firewall (iptables,

ufw  o  nftables  en  Linux)  debe  implementar  una  política  de  denegación  por  defecto,  abriendo

únicamente  los  puertos  que  los  servicios  activos  requieren.  Las  actualizaciones  del  sistema

operativo y de los paquetes instalados corrigen vulnerabilidades conocidas, el intervalo entre la

publicación de un CVE y su explotación masiva ha disminuido drásticamente en los últimos años,

por lo que postergar actualizaciones es un riesgo creciente (Ylonen & Lonvick, 2006). El acceso

remoto debe configurarse con autenticación fuerte, preferentemente mediante llaves criptográficas

y sin posibilidad de acceso con contraseña.

Las  mejores  prácticas  en  soporte  remoto  profesional  combinan  aspectos  técnicos  y

procedimentales. Técnicamente: cifrar todas las sesiones, usar herramientas auditadas, registrar las

13

actividades  realizadas  y  solicitar  al  cliente  confirmación  de  las  acciones  antes  de  ejecutarlas.

Procedimentalmente  documentar  cada  intervención  con  fecha,  síntoma,  diagnóstico,  acciones

tomadas y resultado; obtener autorización explícita del propietario antes de conectarse a un equipo;

no almacenar credenciales de clientes en dispositivos personales; y cerrar las sesiones al finalizar,

verificando que no queden conexiones activas. Estas prácticas protegen tanto al técnico como al

cliente y construyen una relación de confianza basada en transparencia y responsabilidad.

REMOTE TECHNICAL SUPPORT AND SYSTEM DIAGNOSTICS

Remote  technical  support  has  evolved  from  a  convenience  into  a  core  operational

requirement for modern IT departments. Tools like AnyDesk and TeamViewer enable technicians

to  diagnose  and  resolve  hardware  and  software  issues  without  physical  presence,  reducing

response

times  and  operational  costs.  However,

this  convenience

introduces  security

considerations  that  must  be  actively  managed.  Unattended  access  configurations,  if  improperly

secured, create persistent attack vectors that can be exploited by malicious actors. Industry best

practices  recommend  implementing  two-factor  authentication,  unique  access  credentials  per

device, and full session logging to maintain accountability and traceability (AnyDesk Software

GmbH, 2023).

System  diagnostics  in  virtualized  environments  require  a  dual-layer  approach:  the

administrator must monitor both the physical host and the virtual machines running on it. Tools

such as CPU-Z and OCCT provide real-time insight into processor behavior, memory latency, and

thermal performance, while CrystalDiskInfo's SMART analysis offers predictive failure detection

14

for  storage  devices.  In  a  laboratory  context,  combining  these  diagnostic  tools  with  structured

incident analysis methodologies, distinguishing symptoms from root causes, develops the critical

thinking  skills  that  define  a  competent  systems  technician.  The  integration  of  virtualization

platforms, remote access protocols, and hardware diagnostics into a unified operational framework

is  not  merely  an  academic  exercise;  it  mirrors  the  operational  reality  of  contemporary  IT

infrastructure management (Smith & Nair, 2005).

CONCLUSIONES

La  virtualización,  el  soporte  técnico  remoto  y  el  diagnóstico  de  hardware  forman  un

sistema integrado de competencias que el técnico informático moderno debe dominar de manera

articulada,  no  fragmentada.  Conocer  VirtualBox  sin  entender  los  principios  de  asignación  de

recursos  conduce  a  configuraciones  deficientes  que  degradan  el  rendimiento.  Usar  SSH  sin

comprender  los  riesgos  de  seguridad  expone  la  infraestructura  a  ataques  evitables.  Ejecutar

herramientas de diagnóstico como OCCT o CrystalDiskInfo sin saber interpretar sus resultados

produce información que no se traduce en acciones correctivas.

Ubuntu  Server  LTS  representa  el  ecosistema  de  referencia  para  la  administración  de

servidores  en  entornos  educativos  y  empresariales  de  mediana  escala.  Su  ciclo  de  soporte

extendido, la ausencia de entorno gráfico y su kernel estable permiten construir infraestructuras

robustas  con  garantías  de  mantenimiento  a  largo  plazo.  La  configuración  de  red  en  máquinas

virtuales  NAT,  puente  o  solo-anfitrión  debe  seleccionarse  en  función  de  los  requerimientos  de

comunicación del servicio desplegado, no por defecto o conveniencia.

15

La seguridad no es una capa adicional que se agrega al final, es una consideración que debe

estar presente desde el diseño de la infraestructura hasta la ejecución de cada sesión de soporte

remoto. Aplicar el principio de mínimo privilegio, documentar todas las intervenciones y mantener

actualizaciones automáticas son prácticas que no consumen recursos significativos pero reducen

drásticamente  la  superficie  de  ataque.  En  definitiva,  el  profesional  técnico  que  integra  estos

conocimientos con una actitud sistemática frente al diagnóstico está mejor preparado para operar

en entornos críticos donde el tiempo de inactividad tiene consecuencias reales.

REFERENCIAS

16

AnyDesk Software GmbH. (2023). AnyDesk security whitepaper. https://anydesk.com/en/security

Birnbaum,  S.,  &  Gurney,  P.  (2001).  Disk  failures  in  the  real  world:  What  does  an  MTTF  of

1,000,000 hours mean to you? Proceedings of the USENIX Conference on File and Storage

Technologies, 1–9.

Canonical.

(2022).

Ubuntu

Server

22.04

LTS

release

notes.

https://ubuntu.com/server/docs/release-notes

CPUID.

(2024).

CPU-Z:

User

guide

and

technical

reference.

https://www.cpuid.com/softwares/cpu-z.html

Intel  Corporation.  (2023).  Intel®  virtualization  technology  for  IA-32,  IA-64,  and  Intel®  64

architecture

(Document

326019-008).

Intel

Developer

Zone.

https://www.intel.com/content/www/us/en/developer/articles/technical/intel-

virtualization-technology-for-directed-io-vt-d-enhancing-intel-platforms.html

Nemeth, E., Snyder, G., Hein, T. R., Whaley, B., & Mackin, D. (2017). UNIX and Linux system

administration handbook (5th ed.). Addison-Wesley.

Oracle  Corporation.

(2024).  Oracle  VM  VirtualBox  user  manual

(Version  7.0).

https://www.virtualbox.org/manual/UserManual.html

17

Popek, G. J.,  &  Goldberg, R. P. (1974). Formal  requirements for virtualizable third generation

architectures.

Communications

of

the

ACM,

17(7),

412–421.

https://doi.org/10.1145/361011.361073

Smith, J. E., & Nair, R. (2005). The architecture of virtual machines. Computer, 38(5), 32–38.

https://doi.org/10.1109/MC.2005.173

Tanenbaum, A. S., & Bos, H. (2015). Modern operating systems (4th ed.). Pearson.

Ylonen,  T.,  &  Lonvick,  C.  (2006).  The  secure  shell  (SSH)  protocol  architecture  (RFC  4251).

Internet Engineering Task Force. https://datatracker.ietf.org/doc/html/rfc4251


