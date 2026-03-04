---
permalink: primer-corte.html
layout: default
title: Primer Corte
---

# Manual práctico de utilidades CMD y PowerShell para mantenimiento de Windows

Este manual recopila comandos esenciales de **CMD** y **PowerShell** para realizar mantenimiento general del sistema en Windows. Incluye diagnóstico, reparación, red, almacenamiento, procesos y automatización básica.

<!-- TERMINAL / LOG PANEL -->
<div class="hxkr-panel p-0 overflow-hidden flex flex-col" style="height:320px;">
    <div class="flex items-center gap-2 px-4 py-2" style="background:#111911;border-bottom:1px solid #1a2e1a;">
        <span class="w-2.5 h-2.5 rounded-full bg-red-500" style="background:#ff2244;box-shadow:0 0 4px #ff2244;"></span>
        <span class="w-2.5 h-2.5 rounded-full" style="background:#ffb300;box-shadow:0 0 4px #ffb300;"></span>
        <span class="w-2.5 h-2.5 rounded-full" style="background:#00ff41;box-shadow:0 0 4px #00ff41;"></span>
        <span class="ml-2 font-hud text-xs tracking-widest" style="color:#3a5e3a;">COMANDOS</span>
    </div>
    <div class="flex-1 overflow-hidden p-4 text-xs leading-6 font-mono" style="color:#00c832;">
        <div class="log-scroll">
            <div><span style="color:#3a5e3a;">[00:00:01]</span> sfc /scannow</div>
            <div><span style="color:#3a5e3a;">[00:00:02]</span> <span style="color:#00ff41;">✓</span> DISM /Online /Cleanup-Image /RestoreHealth</div>
            <div><span style="color:#3a5e3a;">[00:00:03]</span> chkdsk C: /f /r</div>
            <div><span style="color:#3a5e3a;">[00:00:04]</span> <span style="color:#ffb300;">!</span> tasklist</div>
            <div><span style="color:#3a5e3a;">[00:00:05]</span> <span style="color:#ffb300;">!</span> Get-Process</div>
            <div><span style="color:#3a5e3a;">[00:00:06]</span> taskkill /IM programa.exe /F</div>
            <div><span style="color:#3a5e3a;">[00:00:07]</span> <span style="color:#ff2244;">✗</span> Stop-Process -Name programa -Force</div>
            <div><span style="color:#3a5e3a;">[00:00:08]</span> perfmon</div>
            <div><span style="color:#3a5e3a;">[00:00:09]</span> <span style="color:#00ff41;">✓</span> Get-ComputerInfo</div>
            <div><span style="color:#3a5e3a;">[00:00:10]</span> ipconfig /all</div>
            <div><span style="color:#3a5e3a;">[00:00:11]</span> ipconfig /release</div>
            <div><span style="color:#3a5e3a;">[00:00:12]</span> <span style="color:#00ff41;">✓</span> ipconfig /renew</div>
            <div><span style="color:#3a5e3a;">[00:00:13]</span> ipconfig /flushdns</div>
            <div><span style="color:#3a5e3a;">[00:00:14]</span> <span style="color:#00ffe7;">i</span> Get-PSDrive</div>
            <!-- Duplicate for seamless loop -->
            <div><span style="color:#3a5e3a;">[00:00:01]</span> sfc /scannow</div>
            <div><span style="color:#3a5e3a;">[00:00:02]</span> <span style="color:#00ff41;">✓</span> DISM /Online /Cleanup-Image /RestoreHealth</div>
            <div><span style="color:#3a5e3a;">[00:00:03]</span> chkdsk C: /f /r</div>
            <div><span style="color:#3a5e3a;">[00:00:04]</span> <span style="color:#ffb300;">!</span> tasklist</div>
            <div><span style="color:#3a5e3a;">[00:00:05]</span> <span style="color:#ffb300;">!</span> Get-Process</div>
            <div><span style="color:#3a5e3a;">[00:00:06]</span> taskkill /IM programa.exe /F</div>
            <div><span style="color:#3a5e3a;">[00:00:07]</span> <span style="color:#ff2244;">✗</span> Stop-Process -Name programa -Force</div>
        </div>
    </div>
    <div class="px-4 py-2" style="border-top:1px solid #1a2e1a;">
        <div class="flex items-center gap-2">
            <span style="color:#00ff41;">$</span>
            <input type="text" class="hxkr-input" style="border:none;background:transparent;padding:0;" placeholder="ingresa un comando..." disabled/>
            <span class="animate-blink" style="color:#00ff41;">▋</span>
        </div>
    </div>
</div>

---

## 1. Verificación y reparación del sistema

### 1.1 Comprobar integridad de archivos del sistema (SFC)

```cmd
sfc /scannow
````

* Escanea y repara archivos del sistema dañados.
* Ejecutar como **Administrador**.
* Útil ante errores, cierres inesperados o comportamiento inestable.

---

### 1.2 Reparar imagen del sistema (DISM)

```cmd
DISM /Online /Cleanup-Image /RestoreHealth
```

* Repara la imagen de Windows usando Windows Update.
* Ejecutar antes de `sfc` si este falla.

---

### 1.3 Comprobar disco (CHKDSK)

```cmd
chkdsk C: /f /r
```

* `/f` corrige errores.
* `/r` localiza sectores defectuosos.
* Puede requerir reinicio si se ejecuta en la unidad del sistema.

---

## 2. Gestión de procesos y rendimiento

### 2.1 Ver procesos activos

```cmd
tasklist
```

En PowerShell:

```powershell
Get-Process
```

---

### 2.2 Finalizar proceso

```cmd
taskkill /IM programa.exe /F
```

En PowerShell:

```powershell
Stop-Process -Name programa -Force
```

---

### 2.3 Monitorizar uso del sistema

```cmd
perfmon
```

Abre el Monitor de Rendimiento.

En PowerShell:

```powershell
Get-ComputerInfo
```

Muestra información detallada del sistema.

---

## 3. Gestión de red

### 3.1 Ver configuración IP

```cmd
ipconfig /all
```

---

### 3.2 Renovar dirección IP

```cmd
ipconfig /release
ipconfig /renew
```

---

### 3.3 Vaciar caché DNS

```cmd
ipconfig /flushdns
```

---

### 3.4 Probar conectividad

```cmd
ping google.com
```

```cmd
tracert google.com
```

En PowerShell:

```powershell
Test-NetConnection google.com
```

---

## 4. Gestión de almacenamiento

### 4.1 Ver uso de discos (PowerShell)

```powershell
Get-PSDrive
```

---

### 4.2 Listar discos y particiones

```powershell
Get-Disk
Get-Partition
```

---

### 4.3 Administrar discos (interactivo)

```cmd
diskpart
```

Comandos comunes dentro de diskpart:

```
list disk
select disk 0
list partition
```

---

## 5. Usuarios y permisos

### 5.1 Ver usuarios locales

```cmd
net user
```

---

### 5.2 Crear usuario

```cmd
net user nuevoUsuario contraseña /add
```

---

### 5.3 Agregar a grupo Administradores

```cmd
net localgroup Administrators nuevoUsuario /add
```

---

### 5.4 Ver permisos NTFS

```cmd
icacls C:\Ruta\Carpeta
```

---

## 6. Servicios del sistema

### 6.1 Listar servicios

```cmd
sc query
```

En PowerShell:

```powershell
Get-Service
```

---

### 6.2 Iniciar o detener servicio

```cmd
net stop NombreServicio
net start NombreServicio
```

En PowerShell:

```powershell
Start-Service NombreServicio
Stop-Service NombreServicio
```

---

## 7. Limpieza y mantenimiento básico

### 7.1 Liberador de espacio

```cmd
cleanmgr
```

---

### 7.2 Comprobar programas al inicio

```cmd
msconfig
```

En PowerShell:

```powershell
Get-CimInstance Win32_StartupCommand
```

---

## 8. Registro de eventos

### 8.1 Abrir visor de eventos

```cmd
eventvwr
```

---

### 8.2 Consultar eventos desde PowerShell

```powershell
Get-EventLog -LogName System -Newest 20
```

---

## 9. Actualizaciones del sistema

### 9.1 Forzar detección de actualizaciones

```cmd
wuauclt /detectnow
```

En PowerShell (Windows moderno):

```powershell
UsoClient StartScan
```

---

## 10. Automatización básica en PowerShell

Ejemplo de script para limpiar archivos temporales:

```powershell
$TempPath = "$env:TEMP\*"
Remove-Item $TempPath -Recurse -Force -ErrorAction SilentlyContinue
Write-Output "Archivos temporales eliminados."
```

Guardar como:

```
mantenimiento.ps1
```

Ejecutar con:

```powershell
.\mantenimiento.ps1
```

---

## Buenas prácticas

* Ejecutar comandos críticos como **Administrador**.
* Crear puntos de restauración antes de cambios importantes.
* No usar `diskpart`, `icacls` o `Stop-Process` sin entender su impacto.
* Mantener el sistema actualizado.

---

Este conjunto de herramientas permite realizar mantenimiento preventivo y correctivo sin necesidad de software adicional, aprovechando las utilidades integradas en Windows.
