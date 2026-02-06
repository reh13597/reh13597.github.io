import MasonryGallery from '../components/MasonryGallery';

import Chief1 from '../assets/images/alex/alex_chief1.jpeg';
import Chief2 from '../assets/images/alex/alex_chief2.jpeg';
import Grouse from '../assets/images/alex/alex_grouse.JPG';
import Lillooet from '../assets/images/alex/alex_lillooet.JPG';
import Family from '../assets/images/alex/alex_family.JPG';
import LL from '../assets/images/alex/alex_LL.JPG';
import Cypress1 from '../assets/images/alex/cypress1.jpeg';
import Hack from '../assets/images/alex/alex_hack.JPG';
import Jack from '../assets/images/alex/alex_jack.JPEG';
import June from '../assets/images/alex/alex_june.JPEG';
import Sphynx from '../assets/images/alex/alex_sphynx.JPEG';
import Xmas from '../assets/images/alex/alex_xmas.jpg';

export default function Alex() {
    const galleryItems = [
        { img: Chief1 },
        { img: Chief2 },
        { img: Xmas },
        { img: Family },
        { img: Sphynx },
        { img: Lillooet },
        { img: LL },
        { img: Jack },
        { img: Grouse },
        { img: Cypress1 },
        { img: Hack },
        { img: June },
    ];

    return(
        <div className="max-w-6xl mx-auto md:mt-15 mt-30 px-10">
            <MasonryGallery items={galleryItems} />
        </div>
    );
}

