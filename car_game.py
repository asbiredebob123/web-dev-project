print("Controle seu carro!")
print("Digite ' ajuda ' para ver os comandos.")

ajuda = 'ajuda'
start = 'start'
stop = 'stop'
quit = 'quit'
ligar = 'ligar'
comeco = 'comeco'
started = False

while comeco != ajuda:

    comeco = input("> ")

    if comeco == ajuda:
        print("start - Para ligar o carro.")
        print("stop - Para parar o carro.")
        print("quit - Para sair.")

    elif comeco != ajuda:

        print("Eu não entendi esse comando.")


while ligar != quit:
    ligar = input("> ")

    if ligar == start:
        if started:
            print("Carro já está ligado.")
        else:
            started = True
            print("Carro ligado.")

    elif ligar == stop:

        if not started:
            print("Carro já está parado.")
        else:
            started = False
            print("Você parou o carro.")

    elif ligar == quit:
        print("Você saiu do carro.")
        break
    else:
        print("Eu não entendi esse comando.")

