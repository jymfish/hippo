import paramiko
import traceback
from paramiko.ssh_exception import AuthenticationException
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
#ssh.connect(hostname='10.9.0.0.3',port=22,username='ops',password='Ws@pros!QSCV')
#stdin,stdout,stderr = ssh.exec_command('pwd')
ssh.connect(hostname='10.90.0.3',port=22,username='ops',password='Ws@pros!QSCV')
stdin, stdout, stderr = ssh.exec_command('pwd')
result = stdout.read()
print(result)
ssh.close()


