// JavaScript for Modal functionality

// Function to open modal and display project details
function openModal(projectId) {
    // Example project data
    const projectData = {
        project1: {
            image: "Images/Golf GTI TC.png",
            title: "Volkswagen Golf GTI TC!",
            description: "Volkswagen Golf GTI TC! Que ce soit sur route ou sur piste, la Golf GTI TCR est le maître incontesté de la vitesse et de la performance."
        },
        project2: {
            image: "Images/Golf.png",
            title: "Volkswagen Golf MK2!",
            description: "Ity angamba ny fiara bé mpankafy indrindra ! Klasika tsy manam-pahataperana manambatra ny lamaody taloha sy ny moderina. Miaraka amin'ny bika sport tsara, namana tonga lafatra ho an'ireo tia mitondra fiara."
        },
        project3: {
            image: "Images/Jeep.png",
            title: "Jeep Wrangler",
            description: "Miaraka amin'ny endriny miavaka, ity Jeep ity dia vonona hitondra anao na aiza na aiza, avy any amin'ny arabe an-tanàn-dehibe ka hatrany amin'ny lalana sarotra indrindra. Mpankafy Jeep "
        },
        project4: {
            image: "Images/Lamborghini.png",
            title: "Gelbe Lamborghini Aventador",
            description: "Hery sy hafainganam-pandeha! Miaraka amin'ity fiara mampanofinofy ity dia tsy ho tana mihitsy ny maso. Fiaran'ny nofinofy natao ho an'ireo olona tia kantokanto sy tanjaka. Tsy maintsy mbola hitondra azy ity indray andro any.."
        },
        project5: {
            image: "Images/Retro.png",
            title: "Retro Cars",
            description: "Découvrez cette magnifique voiture vintage ! Cette voiture classique allie élégance et charme d'antan. Avec ses lignes courbées et son style rétro, elle est un véritable bijou sur roues. Parfaite pour les amateurs de voitures anciennes et les passionnés de l'histoire automobile. Revivez les belles années avec cette merveilleuse voiture qui ne passe jamais inaperçue "
        },
        project6: {
            image: "Images/Royal Enfield.png",
            title: "Royal Enfield",
            description: "Découvrez cette superbe moto en camouflage marron, fusion parfaite entre style rétro et performances modernes. Conçue pour conquérir toutes les routes, elle se distingue par son design intemporel et son moteur puissant. Une véritable bête sauvage du monde du Café Racer."
        }
        // Ajoutez d'autres projets ici si nécessaire
    };

    const project = projectData[projectId];
    if (project) {
        document.getElementById("modalImage").src = project.image;
        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalDescription").textContent = project.description;
        document.getElementById("projectModal").style.display = "flex";
    }
}

// Function to close modal
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}