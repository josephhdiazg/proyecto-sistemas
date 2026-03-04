---
permalink: /
layout: default
title: Inicio
---

# Historia general de los Sistemas Operativos

Los **sistemas operativos (SO)** son el software fundamental que permite que el hardware de un computador funcione y que las aplicaciones puedan ejecutarse. Actúan como intermediarios entre el usuario, los programas y los recursos físicos (CPU, memoria, almacenamiento y dispositivos de entrada/salida).

![Windows NT 4.0 Splash Screen]({{ '/assets/img/winnt4.png' | relative_url }})

---

## 1. Orígenes: Mainframes y tiempo compartido (1950–1970)

En los primeros computadores, el software era mínimo. Los programas se cargaban manualmente y el control del hardware era directo.

Con la llegada de los **mainframes**, surgieron los primeros sistemas operativos formales. Su función principal era:

* Gestionar trabajos por lotes (batch processing).
* Administrar memoria y dispositivos.
* Permitir que múltiples usuarios compartieran el sistema mediante **time-sharing**.

Uno de los hitos fundamentales fue **Unix**, desarrollado en 1969 en Bell Labs. Introdujo conceptos clave:

* Sistema de archivos jerárquico.
* Filosofía modular (herramientas pequeñas que hacen bien una tarea).
* Portabilidad (reescrito en C).
* Multiusuario y multitarea.

Unix influenció prácticamente todos los sistemas modernos.

---

## 2. La era de los microordenadores (1970–1980)

Con la aparición de los computadores personales, los sistemas operativos debían adaptarse a hardware mucho más limitado.

En este contexto surgió **CP/M**, que influyó directamente en los primeros sistemas de PC.

Posteriormente, IBM lanzó su PC en 1981 utilizando **MS-DOS**, desarrollado por Microsoft. Era:

* Monousuario.
* Monotarea.
* Basado en línea de comandos.
* Dependiente de arquitectura x86.

Este fue el punto de partida del dominio de Microsoft en el mercado doméstico.

---

# Evolución de Windows

## 1. Primeras versiones (1985–1993)

Microsoft introdujo **Windows 1.0** como una capa gráfica sobre MS-DOS. No era un sistema operativo completo, sino una interfaz.

Le siguieron:

* **Windows 3.1** — popularizó la interfaz gráfica.
* Mejor soporte para aplicaciones y memoria.

Aún dependían de MS-DOS internamente.

---

## 2. La revolución de Windows 95

En 1995, Microsoft lanzó **Windows 95**, que marcó un antes y un después:

* Introducción del botón Inicio.
* Arquitectura híbrida 16/32 bits.
* Plug and Play.
* Integración más profunda del entorno gráfico.

Este sistema consolidó el dominio de Windows en el mercado doméstico.

---

## 3. Línea NT y estabilidad empresarial

En paralelo, Microsoft desarrolló la línea NT:

* **Windows NT**
* **Windows 2000**
* **Windows XP**

Windows XP unificó la línea doméstica y empresarial sobre el núcleo NT, ofreciendo:

* Mayor estabilidad.
* Mejor seguridad.
* Arquitectura moderna.

---

## 4. Windows moderno

Versiones posteriores como:

* **Windows 7**
* **Windows 10**
* **Windows 11**

Evolucionaron hacia:

* Actualizaciones continuas.
* Integración con servicios en la nube.
* Mayor enfoque en seguridad (Secure Boot, TPM).
* Subsistema Linux (WSL).

Hoy Windows es predominante en entornos de escritorio y ampliamente usado en empresas.

---

# Origen y evolución de Linux

## 1. Nacimiento del kernel Linux

En 1991, **Linus Torvalds** anunció el desarrollo de un nuevo kernel inspirado en Unix.

El resultado fue **Linux**, publicado bajo licencia GPL, lo que permitió:

* Modificación libre.
* Distribución abierta.
* Colaboración global.

Linux no es un sistema operativo completo por sí solo, sino el **kernel**. Al combinarse con herramientas del proyecto GNU, nació lo que comúnmente llamamos “GNU/Linux”.

![Linus Torvalds]({{ '/assets/img/linus.png' | relative_url }})
_Linus Torvalds_

---

## 2. Distribuciones

Con el tiempo surgieron múltiples distribuciones:

* **Debian**
* **Red Hat Enterprise Linux**
* **Ubuntu**
* **Arch Linux**

Cada una ofrece:

* Diferentes gestores de paquetes.
* Filosofías distintas (estabilidad vs. actualización continua).
* Orientación a escritorio, servidor o desarrollo.

---

## 3. Dominio en servidores y sistemas embebidos

Linux se convirtió en el estándar en:

* Servidores web.
* Supercomputadores.
* Infraestructura en la nube.
* Dispositivos embebidos.

El sistema operativo **Android** utiliza el kernel Linux, lo que lo convierte en el sistema más desplegado del mundo por número de dispositivos.

---

# Comparación histórica: Windows vs Linux

| Aspecto         | Windows                | Linux             |
| --------------- | ---------------------- | ----------------- |
| Modelo          | Propietario            | Código abierto    |
| Origen          | Evolución desde MS-DOS | Inspirado en Unix |
| Mercado fuerte  | Escritorio             | Servidores y nube |
| Licencia        | Comercial              | GPL y variantes   |
| Personalización | Limitada               | Muy alta          |

Históricamente:

* Windows priorizó compatibilidad comercial y facilidad de uso.
* Linux priorizó libertad, estabilidad y control técnico.

---

# Tendencias modernas

Actualmente los sistemas operativos evolucionan hacia:

* Virtualización.
* Contenedores (Docker).
* Integración con la nube.
* Seguridad avanzada.
* Arquitecturas híbridas (ARM y x86).

Windows ha incorporado compatibilidad con Linux mediante WSL, mientras Linux ha mejorado significativamente su experiencia de escritorio.

---

# Conclusión

Desde los sistemas por lotes en mainframes hasta los entornos modernos basados en la nube, los sistemas operativos han evolucionado constantemente.

Windows consolidó el mercado doméstico y empresarial mediante integración y compatibilidad, mientras Linux transformó la infraestructura global mediante apertura y colaboración. Ambos modelos continúan influyéndose mutuamente y siguen siendo pilares fundamentales de la computación moderna.
