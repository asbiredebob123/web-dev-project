print("Conversor de peso (Kilos to Lbs and vice-versa)")

kilos = "kilos"
lbs = "lbs"

peso = float(input("peso: "))
kg_lbs = input("kilos ou lbs? ")

if kg_lbs == kilos:
    print(f'você pesa {peso * 2.20} {kilos}')
elif kg_lbs == lbs:
    print(f'você pesa {peso / 2.20} {lbs}')



