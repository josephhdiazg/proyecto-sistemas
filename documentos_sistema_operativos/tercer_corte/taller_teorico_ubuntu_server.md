1

Instalación de Linux Server en VirtualBox

Michael David Arias Torres

Universidad Santo Tomás Villavicencio

Profesor Omar Camilo Santiago Garcia

Sistemas Operativos

Abril de 2025

1. Virtualización y Requisitos del Sistema

2

La virtualización es una tecnología que permite ejecutar uno o más

sistemas operativos de manera simultánea sobre un único hardware físico,

mediante la creación de entornos aislados denominados máquinas virtuales. En

el contexto de la instalación de Ubuntu Server en VirtualBox, la virtualización

resulta indispensable porque permite que el sistema anfitrión ceda de forma

controlada sus recursos de cómputo como el procesador, memoria RAM,

almacenamiento y red, a un sistema huésped completamente funcional, sin

necesidad de contar con hardware dedicado adicional. Esta capacidad permite a

estudiantes, desarrolladores y administradores de sistemas practicar con

entornos servidores reales sin afectar la estabilidad del sistema operativo

principal.

Uno de los requisitos técnicos más críticos para que la virtualización

funcione de manera eficiente es el soporte de VT-x o AMD-V a nivel de CPU. Estas

extensiones de hardware permiten que el procesador físico maneje directamente

las instrucciones privilegiadas del sistema huésped, lo que reduce

significativamente la sobrecarga de procesamiento y mejora el rendimiento de la

VM. Sin estas extensiones activadas en la BIOS/UEFI del equipo, VirtualBox opera

en modo de emulación por software, lo cual degrada notablemente el

3

rendimiento, puede generar inestabilidad y en algunos casos impide por

completo la creación de máquinas virtuales de 64 bits, que es precisamente el

requisito de Ubuntu Server. Por ello, la presentación indica de manera explícita

que se debe verificar la activación de VT-x y/o AMD-V antes de continuar con

cualquier paso de configuración.

Respecto a los requisitos de RAM, CPU y disco, su incumplimiento acarrea

consecuencias directas sobre la usabilidad del sistema virtualizado. La

especificación mínima de 2 GB de RAM (con recomendación de 4 GB) no es

arbitraria, ya que Ubuntu Server, aunque opera sin entorno gráfico, necesita

memoria suficiente para mantener activos su kernel, los daemons de sistema, el

servicio SSH y cualquier aplicación adicional que se instale posteriormente.

Asignar menos memoria produce swapping excesivo, que consiste en el uso del

disco como memoria temporal, ralentizando el sistema de forma severa. Del

mismo modo, el espacio en disco de 25 GB mínimo contempla la instalación base

del sistema operativo, las actualizaciones futuras y el espacio para los snapshots

de la VM. La diferencia fundamental entre virtualizar un servidor y un sistema

de escritorio radica en que el servidor prescinde completamente de interfaz

gráfica, lo que reduce el consumo de recursos pero eleva los requerimientos de

estabilidad, seguridad y disponibilidad del servicio. Un sistema de escritorio

puede reiniciarse sin mayor impacto, en cambio un servidor virtualizado puede

estar atendiendo conexiones SSH o servicios web que no deben interrumpirse, lo

que obliga a planificar con mayor rigor la asignación de recursos desde el

4

principio.

2. Uso de VirtualBox y Extension Pack

VirtualBox es un hipervisor de tipo 2 desarrollado por Oracle que se

ejecuta sobre el sistema operativo anfitrión como una aplicación más. A

diferencia de los hipervisores de tipo 1, VirtualBox no requiere hardware

exclusivo ni reemplaza el sistema operativo existente, lo que lo convierte en una

herramienta especialmente adecuada para laboratorios académicos y ambientes

de desarrollo. Su carácter gratuito y de código abierto, junto con su

compatibilidad con Windows, macOS y Linux como anfitriones, reduce

significativamente las barreras de adopción. Además, ofrece funcionalidades

esenciales para la práctica con servidores, como la gestión de snapshots,

configuraciones de red variadas y soporte para múltiples formatos de disco

virtual. Esta versatilidad lo posiciona como la plataforma ideal para que un

estudiante replique escenarios de infraestructura de servidor sin riesgo alguno

para su equipo principal.

5

El VirtualBox Extension Pack es un complemento adicional que no viene

integrado en la instalación base de VirtualBox y que extiende sus capacidades

con funciones que dependen de controladores propietarios. Su función real

incluye el soporte para dispositivos USB 2.0 y 3.0, el protocolo RDP para conexión

remota a la interfaz gráfica de la VM desde otro equipo, el arranque PXE para

tarjetas de red Intel, el soporte para cifrado de disco en VMs y la integración con

ciertas funcionalidades de pantalla completa.

La ausencia del Extension Pack no impide la instalación ni el

funcionamiento básico de Ubuntu Server, pero genera limitaciones concretas y

perceptibles en la práctica de laboratorio. La más inmediata es la imposibilidad

de conectar dispositivos USB 3.0 directamente a la VM, lo que restringe la

transferencia de archivos mediante unidades externas de alta velocidad.

Igualmente, sin el Extension Pack no es posible acceder a la VM mediante RDP, lo

cual puede dificultar ciertos escenarios de práctica remota más avanzados. En un

entorno educativo donde el estudiante puede necesitar copiar archivos entre el

host y la VM, o acceder a la consola de la VM desde otro sistema de la red del

laboratorio, la falta del Extension Pack genera fricciones operativas que obligan a

soluciones alternativas menos eficientes, como el uso de SCP, transferencias por

red interna o almacenamiento en la nube.

3. Ubuntu Server 24.04 LTS

6

Ubuntu Server 24.04 LTS, cuyo nombre en clave es "Noble Numbat", es una

distribución de Linux orientada a la administración de servidores y desarrollada

por Canonical. Las siglas LTS significan Long Term Support, y en el contexto del

ciclo de lanzamiento de Ubuntu implican que esta versión recibirá

actualizaciones de seguridad, correcciones de errores críticos y mantenimiento

activo durante un periodo de cinco años contados desde su fecha de lanzamiento,

es decir, hasta abril de 2029 para la versión 24.04. Este compromiso de soporte

extendido resulta crucial en entornos de servidor porque la estabilidad y la

predictibilidad del sistema son valores fundamentales, en donde un

administrador de sistemas no puede permitirse migraciones de sistema operativo

frecuentes cuando hay servicios críticos en producción. Las versiones no LTS de

Ubuntu, lanzadas cada seis meses, solo cuentan con nueve meses de soporte, lo

que las hace inadecuadas para infraestructura de producción.

El kernel que incorpora Ubuntu Server 24.04 LTS es la versión 6.8, lo que

tiene implicaciones técnicas significativas. Un kernel más reciente ofrece mejor

soporte para hardware moderno, mejoras en los subsistemas de red,

controladores actualizados, parches de seguridad para vulnerabilidades

conocidas como Spectre o Meltdown, y optimizaciones en el rendimiento del

7

sistema de archivos y la planificación de procesos. En servidores, el kernel no es

simplemente el componente que arranca el sistema; es el núcleo sobre el que

descansa toda la pila de software: el servidor web, la base de datos, el motor de

contenedores. Un kernel desactualizado puede representar una superficie de

ataque, mientras que un kernel moderno con soporte extendido garantiza que las

correcciones de seguridad lleguen puntualmente sin necesidad de actualizar todo

el sistema operativo.

La decisión de no instalar entorno gráfico en Ubuntu Server responde a

principios fundamentales de la administración de sistemas. Una interfaz gráfica

de usuario consume recursos considerables de CPU y RAM que en un servidor

deben estar completamente disponibles para los servicios que atiende. Por

ejemplo, un escritorio GNOME puede requerir entre 500 MB y 1 GB de RAM solo

para operar, recursos que en un servidor web traducen directamente en

capacidad para atender más solicitudes concurrentes. Además, cada componente

de software adicional en un servidor representa una superficie de ataque

potencial: librerías gráficas, gestores de ventanas y entornos de escritorio

incorporan miles de líneas de código que pueden contener vulnerabilidades. La

administración de servidores se realiza exclusivamente mediante la interfaz de

línea de comandos y protocolos de acceso remoto como SSH, lo que hace

redundante e indeseable cualquier componente visual en producción.

4. Creación de la Máquina Virtual

8

La creación de una máquina virtual implica una serie de decisiones

técnicas que determinan directamente el desempeño y la viabilidad del sistema

huésped. Al asignar RAM, se debe garantizar que el huésped disponga de

suficiente memoria para operar sin recurrir al swap, pero sin privar al sistema

anfitrión de los recursos que necesita para funcionar simultáneamente. La

recomendación de 2 GB mínimos y 4 GB recomendados para Ubuntu Server

refleja este equilibrio, desde el sistema base, el servicio SSH y las aplicaciones

típicas de servidor operan dentro de ese rango. En cuanto a la CPU, asignar dos

núcleos permite al sistema huésped aprovechar la paralelización para tareas

como la compilación de paquetes, la gestión de múltiples conexiones SSH

simultáneas o la ejecución de contenedores. Respecto al disco, el mínimo de 25 GB

contempla la instalación del sistema base (aproximadamente 5-8 GB), el espacio

para actualizaciones, registros del sistema, snapshots de la VM y el crecimiento

futuro de los datos gestionados por los servicios instalados.

La diferencia entre un disco dinámico y un disco de tamaño fijo es crítica

tanto en términos de rendimiento como de gestión del espacio en el host. Un disco

dinámico comienza con un tamaño reducido en el sistema de archivos del host y

crece progresivamente a medida que la VM escribe datos, hasta alcanzar el

9

tamaño máximo definido (por ejemplo, 25 GB). Esto optimiza el uso del espacio

real en disco del anfitrión, pero introduce una ligera penalización de rendimiento

en cada operación de escritura que requiere expandir el archivo VDI. Por el

contrario, un disco de tamaño fijo reserva en el momento de su creación todo el

espacio definido en el sistema de archivos del host, lo cual puede parecer

ineficiente en términos de almacenamiento inicial, pero ofrece un rendimiento

de lectura/escritura más uniforme y predecible, especialmente en cargas de

trabajo intensivas de I/O. Para laboratorios académicos, el disco dinámico es

suficiente; para entornos de producción, se prefiere el disco fijo o incluso el

acceso directo al disco físico.

Habilitar PAE/NX en la configuración del procesador de la VM tiene

implicaciones técnicas importantes que justifican su activación. PAE (Physical

Address Extension) es una extensión del conjunto de instrucciones x86 que

permite a sistemas operativos de 32 bits acceder a más de 4 GB de RAM al utilizar

punteros de 36 bits en lugar de 32. Aunque Ubuntu Server 24.04 LTS es un

sistema de 64 bits que no necesita PAE para acceder a más de 4 GB, su

habilitación garantiza compatibilidad con kernels que lo requieren y evita

errores de arranque en ciertas configuraciones. NX (No-Execute), por su parte, es

una función de seguridad implementada en el hardware que impide la ejecución

de código en regiones de memoria marcadas como de solo datos, protegiendo

10

contra exploits clásicos como los ataques de desbordamiento de buffer que

inyectan código malicioso en la pila de datos. Activar PAE/NX en VirtualBox

garantiza que el sistema huésped pueda aprovechar plenamente estas

características del procesador anfitrión, mejorando tanto la compatibilidad como

la postura de seguridad del servidor virtualizado.

5. Configuración de Red

VirtualBox ofrece varios modos de red que difieren fundamentalmente en

la visibilidad de la VM dentro de la red y en el nivel de aislamiento respecto al

anfitrión y a otros sistemas. El modo NAT (Network Address Translation) es el

más sencillo y el recomendado para escenarios básicos: la VM comparte la

dirección IP del host mediante un proceso de traducción de direcciones

gestionado internamente por VirtualBox. Esto significa que la VM tiene acceso

saliente a internet, pero no es directamente accesible desde otros equipos de la

red local ni desde el propio host sin configuración adicional. El Adaptador Puente,

en cambio, conecta la interfaz de red virtual directamente a la red física del

anfitrión, actuando como si la VM fuera un equipo físico independiente. La VM

obtiene su propia dirección IP del servidor DHCP de la red local, puede ser

accedida por cualquier otro dispositivo de esa red y se comporta como un

11

servidor real en todos los sentidos de la comunicación de red. Finalmente, la Red

Solo-Anfitrión crea una red completamente aislada entre el host y las VMs, sin

conexión con redes externas. Es ideal para laboratorios donde se necesita

comunicación entre múltiples VMs o entre el host y la VM, sin exposición a

internet.

La elección del modo de red depende del caso de uso concreto. NAT es

apropiado cuando el objetivo es simplemente que la VM tenga acceso a internet

para instalar software o realizar actualizaciones, sin necesidad de acceso externo

hacia la VM. El Adaptador Puente se utiliza cuando el servidor virtualizado debe

ser accesible desde otros equipos de la red, como en un laboratorio donde varios

estudiantes necesitan conectarse por SSH a la misma VM desde sus equipos, o

cuando se desea simular un servidor web accesible por nombre en la red local. La

Red Solo-Anfitrión es la opción preferida en escenarios de práctica aislada, como

laboratorios de seguridad donde se simula una red privada entre varias VMs sin

riesgo de exponer servicios al exterior, o cuando se trabaja con entornos de

prueba de aplicaciones que no deben tener acceso a internet.

Las implicaciones de la configuración de red cobran especial relevancia

cuando el servidor es accesible por SSH. Con el modo NAT, la VM no es

directamente alcanzable desde el host ni desde otros equipos de la red, porque su

dirección IP es una IP privada interna gestionada por VirtualBox. Para habilitar

12

conexiones SSH en modo NAT es necesario configurar el reenvío de puertos (port

forwarding): se define una regla que mapea un puerto del host (por ejemplo, el

puerto 2222) hacia el puerto 22 de la VM, de modo que una conexión SSH dirigida

al host en el puerto 2222 sea redirigida transparentemente al servidor SSH de la

VM. Con el Adaptador Puente, en cambio, la conexión SSH se establece

directamente a la IP de la VM, sin redirecciones. Esta distinción es importante

porque en producción los servidores siempre tienen IPs accesibles directamente,

mientras que en entornos de laboratorio el reenvío de puertos es una solución

práctica que no requiere cambios en la infraestructura de red del host.

6. Proceso de Instalación

El proceso de instalación de Ubuntu Server 24.04 LTS a través del asistente

basado en texto involucra decisiones que, aunque parecen triviales, tienen

implicaciones técnicas y operativas. La elección del idioma del sistema es una de

ellas: la recomendación de instalar en inglés no responde a una preferencia

estética, sino a razones técnicas concretas. La mayoría de los mensajes de error

del sistema operativo, la documentación técnica oficial, los foros de soporte y las

bases de conocimiento de solución de problemas están en inglés. Un sistema

configurado en inglés facilita la búsqueda de soluciones cuando el administrador

13

encuentra un error específico, porque puede copiar el mensaje de error

directamente en un buscador sin necesidad de traducción. Además, ciertos

paquetes y scripts de administración asumen que los mensajes del sistema

estarán en inglés para funcionar correctamente con herramientas de parsing

como grep o awk. La configuración del teclado, por el contrario, sí puede

ajustarse a la región del usuario (por ejemplo, Spanish Latin America) ya que solo

afecta la interpretación de las teclas físicas, no los mensajes del sistema.

El particionado automático que propone el instalador de Ubuntu Server es

la opción recomendada para instalaciones básicas y de laboratorio porque genera

una estructura de particiones funcional con mínima intervención del usuario. El

instalador crea automáticamente una partición EFI de arranque (si el sistema usa

UEFI), una partición raíz con el sistema de archivos ext4 y en algunos casos una

partición de swap. Esta estrategia es adecuada para entornos de aprendizaje,

pero en producción un administrador experimentado consideraría un esquema

de particionado manual que separa directorios críticos como /var, /home o /tmp

en particiones independientes. Esta separación evita que el crecimiento

descontrolado de los logs en /var (que puede ocurrir ante un ataque de

denegación de servicio o un bug en una aplicación) llene el sistema de archivos

raíz y deje el servidor completamente inoperable.

14

La instalación de OpenSSH Server durante el proceso de instalación es una

de las decisiones más relevantes del flujo completo y merece análisis especial.

OpenSSH es el protocolo y la implementación de acceso remoto seguro por

excelencia en sistemas Linux. Instalarlo durante el proceso de configuración

inicial garantiza que el servidor esté disponible para conexiones remotas desde el

primer arranque, eliminando la necesidad de interactuar físicamente con la

consola de la VM después de la instalación. En un entorno de servidor real, donde

la consola física puede no estar disponible o puede encontrarse en un datacenter

remoto, SSH es el único medio de administración. Habilitarlo desde la instalación

refleja la filosofía de los servidores Linux: deben ser administrables de forma

remota desde el primer momento de su puesta en marcha, sin dependencia de

interfaces gráficas o consolas locales.

7. Primer Inicio y Comandos Esenciales

Tras el primer inicio de Ubuntu Server, el administrador dispone de un

conjunto de comandos fundamentales que le proporcionan una visión completa

del estado del sistema. El primero y más utilizado es sudo apt update && sudo apt

upgrade -y, que en realidad es una cadena de dos comandos vinculados. El

comando apt update sincroniza la lista local de paquetes disponibles con los

15

repositorios de Ubuntu definidos en el sistema, descargando el índice de

versiones actuales sin instalar nada. El comando apt upgrade aplica todas las

actualizaciones disponibles para los paquetes ya instalados. Ejecutar esta

secuencia como primer paso después de la instalación es una práctica de

seguridad fundamental: el sistema recién instalado puede tener versiones de

software con vulnerabilidades conocidas que ya tienen parches disponibles en los

repositorios. Un servidor expuesto a la red sin actualizar es vulnerable desde su

primer segundo de funcionamiento.

El comando ip addr show es el sucesor moderno del clásico ifconfig e

informa al administrador sobre las interfaces de red activas en el sistema, sus

direcciones IP asignadas, las máscaras de subred, el estado de la interfaz y los

identificadores de hardware. Esta información es crítica para configurar

conexiones SSH desde el host, ya que sin conocer la IP de la VM es imposible

establecer la conexión remota. El comando df -h reporta el uso del espacio en

disco de todos los sistemas de archivos montados, mostrando el tamaño total, el

espacio usado, el disponible y el porcentaje de uso en unidades comprensibles

(GB, MB). Un administrador de sistemas revisa df -h regularmente para detectar

particiones que se aproximen al límite de capacidad antes de que causen fallos de

servicio. Por su parte, free -h muestra el estado actual de la memoria RAM y del

espacio de swap, incluyendo cuánta memoria está en uso, cuánta está libre y

16

cuánta está siendo utilizada como caché por el kernel, información vital para

diagnosticar problemas de rendimiento por escasez de memoria.

El comando systemctl es la interfaz de administración del sistema de inicio

y gestión de servicios systemd, que es el PID 1 de Ubuntu Server 24.04. A través de

systemctl, el administrador puede verificar el estado de cualquier servicio del

sistema, iniciarlo, detenerlo, reiniciarlo o habilitarlo para que arranque

automáticamente con el sistema. La verificación del estado del servicio SSH con

systemctl status ssh muestra si el daemon sshd está activo, el PID del proceso, el

tiempo que lleva en ejecución y las últimas líneas de su log, lo que permite

diagnosticar problemas de conexión en segundos. Finalmente, hostnamectl

permite consultar y modificar el nombre del host del servidor, la arquitectura del

kernel, el ID del sistema operativo y otros metadatos del sistema. Un hostname

correcto y descriptivo es importante en infraestructuras con múltiples servidores,

ya que identifica de forma inequívoca cada máquina en los logs del sistema, en

los registros DNS y en las herramientas de monitoreo.

8. Conexión Remota por SSH

SSH (Secure Shell) es un protocolo de red criptográfico que permite

establecer canales de comunicación seguros entre dos sistemas sobre redes no

17

confiables, como internet. En el contexto de la administración de servidores

Linux, SSH es el mecanismo estándar e indispensable de acceso remoto porque

proporciona un canal cifrado para la ejecución de comandos, la transferencia de

archivos y el reenvío de puertos de red. Su esencialidad en servidores radica en

que reemplaza completamente los protocolos inseguros como Telnet o rsh, que

transmitían las credenciales y los datos en texto plano, susceptibles de

interceptación. Con SSH, toda la comunicación entre el cliente y el servidor se

cifra mediante algoritmos criptográficos modernos, lo que garantiza

confidencialidad, integridad y autenticación mutua. En la práctica, un

administrador puede gestionar un servidor ubicado en cualquier parte del

mundo con el mismo nivel de seguridad que si estuviera sentado frente a su

consola física.

La diferencia entre conectarse por SSH con la VM configurada en modo

NAT versus el modo Adaptador Puente implica una distinción fundamental en la

topología de red y en el flujo de los paquetes. Con el Adaptador Puente, la VM

tiene su propia dirección IP en la red local, completamente reachable desde

cualquier equipo de esa red, incluyendo el host. La conexión SSH se establece

directamente como ssh usuario@192.168.1.105, por ejemplo. Con el modo NAT, la

VM vive detrás de un proceso de traducción de direcciones gestionado por

VirtualBox y su IP interna no es accesible directamente desde el host. Para hacer

18

posible la conexión SSH, es necesario configurar el reenvío de puertos: se crea

una regla que indica que las conexiones TCP al puerto 2222 del host deben ser

redirigidas al puerto 22 de la VM. El cliente SSH del host debe entonces

conectarse a localhost (127.0.0.1) en el puerto 2222: ssh -p 2222 usuario@127.0.0.1.

Aunque más complejo de configurar, el reenvío de puertos con NAT añade una

capa de aislamiento que puede ser deseable en ciertos escenarios de seguridad.

Los riesgos de seguridad asociados a una configuración incorrecta de SSH

son numerosos y graves, especialmente cuando el servidor es accesible desde

internet. El vector de ataque más común es el ataque de fuerza bruta:

herramientas automatizadas escanean continuamente internet en busca de

servidores con el puerto 22 abierto y prueban miles de combinaciones de usuario

y contraseña por segundo. Un servidor SSH con contraseñas débiles o con el

usuario root habilitado para inicio de sesión remoto puede ser comprometido en

minutos. Las medidas de mitigación fundamentales incluyen deshabilitar el

acceso directo del usuario root mediante SSH, usar autenticación basada en

claves criptográficas en lugar de contraseñas, cambiar el puerto SSH del estándar

22 a un puerto alto no estándar para reducir el volumen de escaneos

automatizados, y configurar herramientas como fail2ban que bloquean

temporalmente las IPs que generan múltiples intentos de autenticación fallidos.

Estas configuraciones no son opcionales en un servidor de producción; son el

mínimo indispensable para operar un servicio SSH de forma responsable.

19

9. Configuración Post-Instalación

La configuración post-instalación comprende el conjunto de tareas que

transforman un sistema operativo recién instalado en un servidor seguro,

identificable y estable para su operación. El firewall UFW (Uncomplicated

Firewall) es una capa de control de acceso a la red que opera a nivel del sistema

operativo, permitiendo al administrador definir con precisión qué servicios y

puertos son accesibles desde la red. UFW es la interfaz simplificada de iptables, el

subsistema de filtrado de paquetes del kernel Linux. Su importancia radica en

que implementa el principio de menor privilegio a nivel de red: todo el tráfico

entrante está denegado por defecto, y solo se permiten explícitamente los puertos

de los servicios que el servidor debe exponer. El comando sudo ufw allow

OpenSSH habilita específicamente el tráfico SSH antes de activar el firewall, lo

que es crítico para no bloquear la propia conexión de administración remota al

activar UFW. Un servidor sin firewall correctamente configurado expone todos

sus servicios a cualquier sistema de la red, multiplicando la superficie de ataque

de forma innecesaria.

20

La actualización inmediata del sistema tras la instalación es una práctica

de seguridad no negociable. Entre la fecha en que se publicó la imagen ISO de

Ubuntu Server 24.04 LTS y el momento en que el administrador realiza la

instalación pueden haber transcurrido semanas o meses, durante los cuales

Canonical habrá publicado parches de seguridad para vulnerabilidades

descubiertas en el kernel, en las bibliotecas del sistema o en los paquetes base. Un

servidor que opera sin estas actualizaciones es vulnerable a exploits

documentados públicamente, cuyos detalles técnicos y herramientas de

explotación están disponibles en bases de datos como CVE  o en plataformas de

seguridad ofensiva. El comando sudo apt update && sudo apt upgrade -y && sudo

apt autoremove -y realiza tres operaciones concatenadas: actualiza el índice de

repositorios, aplica todas las actualizaciones disponibles y elimina los paquetes

huérfanos que ya no son necesarios tras las actualizaciones, liberando espacio en

disco.

La configuración del hostname y de una dirección IP estática representa el

paso final de la configuración de identidad de red del servidor. El hostname es el

nombre con el que el servidor se identifica en la red y en sus propios logs del

sistema; un nombre descriptivo como mi-servidor-web o db-primario facilita

enormemente la administración en infraestructuras con múltiples servidores. Se

configura mediante sudo hostnamectl set-hostname nombre-servidor. La IP

21

estática, por su parte, es fundamental para cualquier servicio que deba ser

accesible de forma predecible: si el servidor obtiene su IP por DHCP, esta puede

cambiar en cada reinicio o al renovar el contrato DHCP, lo que invalidaría

cualquier configuración de DNS, reglas de firewall en otros equipos, entradas en

el archivo known_hosts de los clientes SSH o registros de configuración de

servicios que referencien la IP del servidor. En Ubuntu Server 24.04 LTS, la IP

estática se configura mediante el fichero YAML de Netplan ubicado en

/etc/netplan/00-installer-config.yaml, donde se define la interfaz de red, la

dirección IP con su máscara, la puerta de enlace y los servidores DNS,

garantizando que el servidor mantenga siempre la misma identidad de red

independientemente de los reinicios o del estado del servidor DHCP de la red.

Referencias

22

Canonical Ltd. (2024). Ubuntu Server 24.04 LTS (Noble Numbat). Ubuntu.

https://ubuntu.com/download/server

Oracle Corporation. (2024). VirtualBox 7.x documentation. Oracle VirtualBox.

https://www.virtualbox.org/wiki/Documentation

Stallings, W. (2018). Operating systems: Internals and design principles (9.ª ed.).

Pearson Education.

Tanenbaum, A. S., & Bos, H. (2015). Modern operating systems (4.ª ed.). Pearson

Education.

The OpenSSH Project. (2024). OpenSSH manual pages.

https://www.openssh.com/manual.html


