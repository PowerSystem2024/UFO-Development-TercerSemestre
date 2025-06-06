import logging as log

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s' ,
                datefmt='%I:%M:%S %p' ,
                handlers=[
                    log.FileHandler('capa de datos.log') ,
                    log.StreamHandler()
                ])

if __name__ == '__main__':
     log.debug('Mensaje a nivel debug')
     log.info('mensaje a nivel info')
     log.warning('Mensaje a nivel warning')
     log.error('Mensaje a nivel error')
     log.critical('Mensaje a nivel critical')

