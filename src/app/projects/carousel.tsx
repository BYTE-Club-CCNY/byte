import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "@/components/ui/embla-thumb";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { PopupGrid } from "./popup";

type ProjectType = {
  name: string;
  image: string;
  description: string;
};

type PropType = {
  slides: ProjectType[];
  options?: EmblaOptionsType;
};
// READ HERE:
// At line 70ish, you will put the content you want to show on pop up. The title and description are already
// labeled for you already. There are other usages you can import in the original documentation for the component
// so if you need those you can look. I resized the pop up for you, all we need to do left is to actually retrieve
// the content to display on the pop up
// Here's documentation for reference of the alert popup: https://ui.shadcn.com/docs/components/alert-dialog
// Note if you want to change anything around with the actual pop up design itself, you will have to go to
// components/ui/alert-dialog.tsx
const EmblaCarousel: React.FC<PropType> = (props) => {
  const router = useRouter();
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onImageClick = (name: string) => {
    router.push(`/projects/name/${name}`);
  };

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla" id="projects">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="embla__slide__name">{slide.name}</div>
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="embla__slide__image"
                      />
                      <AlertDialogContent className="w-7/12 h-7/8">
                        <PopupGrid name={slide.name} />
                      </AlertDialogContent>
                    </AlertDialogTrigger>
                  </AlertDialog>
                </div>
                <div className="embla__slide__description">
                  {slide.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                label={slide.name} // updated to show name
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
