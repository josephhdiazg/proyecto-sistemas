---
permalink: /primer-corte.html
layout: default
title: Primer Corte
---

<style>
.img-cmd-slot {
  border: 2px dashed #1a2e1a;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: #3a5e3a;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
  margin: 0.5rem 0 1.5rem 0;
  padding: 1rem;
}
.img-cmd-slot img { width: 100%; height: auto; display: block; }
.img-cmd-slot span { font-family: 'Orbitron', monospace; font-size: 0.55rem; letter-spacing: 0.1em; }
</style>

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
            <div><span style="color:#3a5e3a;">[00:00:08]</span> <span style="color:#00ff41;">✓</span> Get-ComputerInfo</div>
            <div><span style="color:#3a5e3a;">[00:00:09]</span> ipconfig /all</div>
            <div><span style="color:#3a5e3a;">[00:00:10]</span> ipconfig /release</div>
            <div><span style="color:#3a5e3a;">[00:00:11]</span> <span style="color:#00ff41;">✓</span> ipconfig /renew</div>
            <div><span style="color:#3a5e3a;">[00:00:12]</span> ipconfig /flushdns</div>
            <div><span style="color:#3a5e3a;">[00:00:13]</span> <span style="color:#00ffe7;">i</span> Get-PSDrive</div>
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
```

* Escanea y repara archivos del sistema dañados.
* Ejecutar como **Administrador**.
* Útil ante errores, cierres inesperados o comportamiento inestable.

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/sfc_scannow.png' | relative_url }}" alt="sfc /scannow resultado">
</div>

---

### 1.2 Reparar imagen del sistema (DISM)

```cmd
DISM /Online /Cleanup-Image /RestoreHealth
```

* Repara la imagen de Windows usando Windows Update.
* Ejecutar antes de `sfc` si este falla.

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/dism_online_cleanup-image.png' | relative_url }}" alt="DISM resultado">
</div>

---

### 1.3 Comprobar disco (CHKDSK)

```cmd
chkdsk C: /f /r
```

* `/f` corrige errores.
* `/r` localiza sectores defectuosos.
* Puede requerir reinicio si se ejecuta en la unidad del sistema.

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/chkdsk.png' | relative_url }}" alt="chkdsk resultado">
</div>

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

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/tasklist.png' | relative_url }}" alt="tasklist resultado">
  <img src="{{ '/assets/img/windows_commands/Get-Process.png' | relative_url }}" alt="Get-Process resultado">
</div>

---

### 2.2 Finalizar proceso

```cmd
taskkill /IM programa.exe /F
```

En PowerShell:

```powershell
Stop-Process -Name programa -Force
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/taskkill_IM_program_F.png' | relative_url }}" alt="taskkill resultado">
  <img src="{{ '/assets/img/windows_commands/Stop_Process_Name_Force.png' | relative_url }}" alt="Stop-Process resultado">
</div>

---

### 2.3 Información del sistema

```powershell
Get-ComputerInfo
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/get-computerinfo.png' | relative_url }}" alt="Get-ComputerInfo resultado">
</div>

---

## 3. Gestión de red

### 3.1 Ver configuración IP

```cmd
ipconfig /all
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/ipconfig_all.png' | relative_url }}" alt="ipconfig /all resultado">
</div>

---

### 3.2 Renovar dirección IP

```cmd
ipconfig /release
ipconfig /renew
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/ipconfig_release_and_renew.png' | relative_url }}" alt="ipconfig /release y /renew resultado">
</div>

---

### 3.3 Vaciar caché DNS

```cmd
ipconfig /flushdns
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/ipconfig_flushdns.png' | relative_url }}" alt="ipconfig /flushdns resultado">
</div>

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

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/ping_googlecom.png' | relative_url }}" alt="ping google.com resultado">
  <img src="{{ '/assets/img/windows_commands/tracert_googlecom.png' | relative_url }}" alt="tracert google.com resultado">
  <img src="{{ '/assets/img/windows_commands/Test-NetConnection_googlecom.png' | relative_url }}" alt="Test-NetConnection resultado">
</div>

---

## 4. Gestión de almacenamiento

### 4.1 Ver uso de discos (PowerShell)

```powershell
Get-PSDrive
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/Get-PSDrive.png' | relative_url }}" alt="Get-PSDrive resultado">
</div>

---

### 4.2 Listar discos y particiones

```powershell
Get-Disk
Get-Partition
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/Get-Disk.png' | relative_url }}" alt="Get-Disk resultado">
  <img src="{{ '/assets/img/windows_commands/Get-Partition.png' | relative_url }}" alt="Get-Partition resultado">
</div>

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

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/diskpart.png' | relative_url }}" alt="diskpart en ejecución">
</div>

---

## 5. Usuarios y permisos

### 5.1 Ver usuarios locales

```cmd
net user
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/net%20user.png' | relative_url }}" alt="net user resultado">
</div>

---

### 5.2 Crear usuario

```cmd
net user nuevoUsuario contraseña /add
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/netusernuevoUsuariocontraseñaadd.png' | relative_url }}" alt="net user /add resultado">
</div>

---

### 5.3 Agregar a grupo Administradores

```cmd
net localgroup Administrators nuevoUsuario /add
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/netlocalgroupAdministratorsnuevoUsuarioadd.png' | relative_url }}" alt="net localgroup /add resultado">
</div>

---

### 5.4 Ver permisos NTFS

```cmd
icacls C:\Ruta\Carpeta
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/icacls.png' | relative_url }}" alt="icacls resultado">
</div>

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

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/sc_query.png' | relative_url }}" alt="sc query resultado">
  <img src="{{ '/assets/img/windows_commands/Get-Service.png' | relative_url }}" alt="Get-Service resultado">
</div>

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

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/net%20stop%20and%20start%20Spooler.png' | relative_url }}" alt="net stop/start resultado">
  <img src="{{ '/assets/img/windows_commands/stop%20and%20start%20service.png' | relative_url }}" alt="Start/Stop-Service resultado">
</div>

---

## 7. Limpieza y mantenimiento básico

### 7.1 Liberador de espacio

```cmd
cleanmgr
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/cleanmgr.png' | relative_url }}" alt="cleanmgr resultado">
</div>

---

### 7.2 Comprobar programas al inicio

```cmd
msconfig
```

En PowerShell:

```powershell
Get-CimInstance Win32_StartupCommand
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/msconfig.png' | relative_url }}" alt="msconfig resultado">
  <img src="{{ '/assets/img/windows_commands/Get-CimInstance%20Win32_StartupCommand.png' | relative_url }}" alt="Get-CimInstance resultado">
</div>

---

## 8. Registro de eventos

### 8.1 Abrir visor de eventos

```cmd
eventvwr
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/eventvwr.png' | relative_url }}" alt="eventvwr resultado">
</div>

---

### 8.2 Consultar eventos desde PowerShell

```powershell
Get-EventLog -LogName System -Newest 20
```

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/Get-EventLog%20-LogName%20System%20-Newest%2020.png' | relative_url }}" alt="Get-EventLog resultado">
</div>

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

<div class="img-cmd-slot">
  <img src="{{ '/assets/img/windows_commands/wuauclt%20detectnow.png' | relative_url }}" alt="wuauclt /detectnow resultado">
  <img src="{{ '/assets/img/windows_commands/UsoClient%20StartScan.png' | relative_url }}" alt="UsoClient StartScan resultado">
</div>

---

## Buenas prácticas

* Ejecutar comandos críticos como **Administrador**.
* Crear puntos de restauración antes de cambios importantes.
* No usar `diskpart`, `icacls` o `Stop-Process` sin entender su impacto.
* Mantener el sistema actualizado.
