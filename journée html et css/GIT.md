# Les bases

Pour créer un dépot, on se place dans le répertoir destiné à devenir un dépot.

On utilise la commande :
```sh
git init
```

Pour s'assurer que cela a bien fonctionné, on peut utiliser la commande :
```sh
git status
```

Pour sauvegarder on procède en deux étapes :
1. on ajoute les fichiers à sauvegarder avec la commande :
on se place dans le répertoire du dépot et on utilise la commande :
```sh
git add . # ajouter tous les fichiers non sauvegardés
```
ensuite on sauvegarde les fichiers avec la commande :
```sh
git commit -m "message de sauvegarde"
```
Pour envoyer les fichiers sur un serveur distant Github, on utilise la commande :
```sh
git remote add origin https://<monpseudo>:<token>@github.com/Durandal69/ISITECH-2024-2025-B1.git
git remote add origin https://Durandal69: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@github.com/Durandal69/ISITECH-2024-2025-B1.git
```
puis
```sh
git push -u origin main
```
git branch -M main


