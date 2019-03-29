#i = 1
#while i <=5 :
    #print('a' * i)
    #i = i + 1
#print("Feito")

print("Adivinhe o número escondido - OBS: Apenas números inteiros.")

numero = 9
tentativas_limite = 3
contador_tentativas = 0

while contador_tentativas < tentativas_limite:
    adivinhe = int(input("Adivinhe o número: "))
    contador_tentativas += 1

    if adivinhe != numero:
        print("Você errou!")

    if adivinhe == numero:
        print("Você acertou!")
        break