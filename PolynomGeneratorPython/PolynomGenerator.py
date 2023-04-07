import random
import math
from fractions import Fraction
import time


#Generer un discriminant carré
def genererNombreCarre():
    nombreCarre = math.pow(random.randint(1,10), 2)
    #print("Génération ; ", nombreCarre)
    return nombreCarre


def genererPolynome(discriminant):
    #Décomposer en une soustraction
    bcarre = genererNombreCarre()
    b = math.sqrt(bcarre)
    moins_quatre_a_c = discriminant - bcarre
    #print("\nb²:", bcarre, "\nb:", b, "\nD:", discriminant, "\n-4ac:", moins_quatre_a_c)


    while True:
        a = random.randint(-10,10)
        #print("\nGenerer a : ", a)

        #Si a == 0 , la division par zéro est impossible alors on génère un autre c
        if a != 0:
            break

    c = Fraction(moins_quatre_a_c / (-4 * a)).limit_denominator(max_denominator=100)
    #print("c=", c)
    #print(b, "²", "-4 * ", a, " * ", c, " = ", discriminant)
    #print(bcarre - 4 * a * c)

    return {'a': a, 'b': b, 'c': c}

#Afficher un polynome sous format str
def afficherPolynome(p):
    return f"{p.get('a')}x² + {p.get('b')}x + {p.get('c')}"


#Propose un exercice de résolution de polynome à partir d'un discriminant et donne la solution
def proposerExercicePolynome(discriminant):
    polynome = genererPolynome(discriminant)
    print("Trouver le discriminant de ce polynome de second degré : ")
    print(afficherPolynome(polynome))
    print("Solution : ", discriminant)
    assert (math.pow(polynome.get("b"), 2) - 4 * polynome.get("a") * polynome.get("c")) == discriminant   #Test de la génération

   
#Gérerer un polynome dont le discriminant est carré
def genererPolynomeDiscriminantCarre():
    discriminant = genererNombreCarre()
    proposerExercicePolynome(discriminant)


#Génerer un polynome dont le discriminant est petit et non carré
def genererPolynomeDiscriminantPetit():
    def nonCarre(number):
        #print('nb : ', number)
        if number < 0:
            return True

        root = math.sqrt(number)
        if int(root + 0.5) ** 2 == number:
            return False
        else:
            return True
    
    while True: 
        discriminant = random.randint(-10,10)
        if nonCarre(discriminant) == True:
           break

    proposerExercicePolynome(discriminant)
    

#Génerer un polynome dont le discriminant est négatif
def genererPolynomeDiscriminantNegatif():
    discriminant = random.randint(-30, -1)
    proposerExercicePolynome(discriminant)


#Tester les fonctions dans une infinité de cas
while True:
    print("Discriminant Carré :")
    genererPolynomeDiscriminantCarre()
    print()
    time.sleep(0.2)

    print("Discriminant Négatif :")
    genererPolynomeDiscriminantNegatif()
    print()
    time.sleep(0.2)

    print("Discriminant non Carré et petit :")
    genererPolynomeDiscriminantPetit()
    print()
    time.sleep(0.2)
