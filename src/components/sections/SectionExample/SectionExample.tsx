"use client"

import {FC, JSX} from 'react';
import styles from './SectionExample.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import AnimationTitle from '../../common/AnimationTitle/AnimationTitle';
import PaintedText from '../../common/PaintedText/PaintedText';
import {SiteColorsEnum} from '@/enums/SiteColorsEnum';
import 'react-photo-view/dist/react-photo-view.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import {exampleImages, IExampleImagesData} from './ImageListData';
import Image from 'next/image';

/** Секция "Примеры наших работ". */
const SectionExample: FC = (): JSX.Element => {
    return (
    <section className={styles.examples}>
        <Wrapper>
            <AnimationTitle className={styles.title}>
                <PaintedText color={SiteColorsEnum.BLACK}>Примеры</PaintedText>
                наших работ
            </AnimationTitle>

            <PhotoProvider>
                <div className={styles.images}>
                    {exampleImages.map((item: IExampleImagesData, index: number) => (
                    <PhotoView key={index} src={item.original}>
                        <Image
                            src={item.preview}
                            alt={`Изображение наших работ ${index + 1}`}
                            className={styles.img}
                        />
                    </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </Wrapper>
    </section>
    );
};

export default SectionExample;
