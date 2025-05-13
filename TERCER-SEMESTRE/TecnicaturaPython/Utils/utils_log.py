# Funciones útiles para frases pre establecidas, para ser usadas en comentarios o en el código en generál.

# utils_log.py

# log_utils.py

import time

# Función de log para mensajes de éxito
def log_exito(mensaje):
    print(f"✅ {mensaje}")

# Función de log para mensajes de error
def log_error(mensaje):
    print(f"❌ {mensaje}")

# Función de log para mensajes de advertencia
def log_warning(mensaje):
    print(f"⚠️ {mensaje}")

# Función de log para mensajes informativos
def log_info(mensaje):
    print(f"ℹ️ {mensaje}")

# Función de log para ideas y sugerencias
def log_idea(mensaje):
    print(f"💡 {mensaje}")

# Función de log para mensajes de depuración (debug)
def log_debug(mensaje):
    print(f"🐞 DEBUG: {mensaje}")

# Función de log para medir tiempo de ejecución
def log_tiempo_inicio():
    return time.time()

def log_tiempo_final(inicio):
    fin = time.time()
    tiempo_total = fin - inicio
    print(f"⏱️ Tiempo de ejecución: {tiempo_total:.2f} segundos.")

# Función de log para dividir en secciones de "encabezados"
def log_encabezado(mensaje):
    print(f"\n===== {mensaje} =====")

# Función de log para mensajes de información de tipo "importante"
def log_importante(mensaje):
    print(f"‼️ IMPORTANTE: {mensaje}")

# Nuevos mensajes agregados
def log_operacion_exito():
    print("✅ Operación realizada con éxito.")

def log_error_critico():
    print("❌ Error crítico detectado, abortando el proceso.")

def log_atencion_parametros():
    print("⚠️ Atención: Parámetros incorrectos, revisá los datos ingresados.")

def log_recordatorio_guardar():
    print("ℹ️ Recordá guardar tu trabajo regularmente.")

def log_tip_trayectos():
    print("💡 Tip: Usá try-except para manejar errores imprevistos.")

def log_procesando_solicitud():
    print("🔄 Procesando solicitud, por favor esperá...")

def log_tiempo_agotado():
    print("⏰ Tiempo agotado, terminando la ejecución.")

def log_archivo_cargado():
    print("📄 Archivo cargado correctamente.")

def log_datos_guardados():
    print("💾 Datos guardados exitosamente.")

def log_buscando_coincidencias():
    print("🔍 Buscando coincidencias en la base de datos...")

def log_abriendo_carpeta():
    print("📂 Abriendo carpeta de recursos.")

def log_acceso_autorizado():
    print("🔑 Acceso autorizado.")

def log_seguridad_activada():
    print("🔒 Seguridad activada: datos protegidos.")

def log_desbloqueo_exitoso():
    print("🔓 Desbloqueo exitoso, continuando...")

def log_bienvenido_sistema():
    print("💻 Bienvenido al sistema de control de usuarios.")

def log_servidor_online():
    print("🖥️ Servidor en línea y funcionando.")

def log_conexion_establecida():
    print("📶 Conexión establecida con la red.")

def log_optimizacion_completada():
    print("⚡ Optimización de procesos completada.")

def log_tarea_completada():
    print("☑️ Tarea completada sin errores.")

def log_actualizacion_config():
    print("🔨 Actualización de configuración aplicada.")

def log_herramientas_disponibles():
    print("🛠️ Herramientas de diagnóstico disponibles.")

def log_modulo_IA():
    print("🤖 Módulo de IA activado.")

def log_pruebas_laboratorio():
    print("🔬 Ejecutando pruebas de laboratorio.")

def log_lanzamiento_exitoso():
    print("🚀 Lanzamiento exitoso del módulo principal.")

def log_todo_funcionando():
    print("🔥 Todo funcionando a la perfección!")

def log_estado_sistema():
    print("🚦 Estado actual del sistema: en verde.")

def log_funcionalidad_desbloqueada():
    print("🎁 Nueva funcionalidad desbloqueada.")
