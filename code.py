import os
from PIL import Image

# Chemin du dossier contenant les images
dossier_images = 'src/images'

# Parcours des fichiers dans le dossier
for fichier in os.listdir(dossier_images):
    if fichier.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp')):
        chemin_image = os.path.join(dossier_images, fichier)
        with Image.open(chemin_image) as img:
            largeur, hauteur = img.size
            print(f"Image : {fichier} - Dimensions : {largeur} x {hauteur}")
