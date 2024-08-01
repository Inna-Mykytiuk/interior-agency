import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import { postType } from './schemaTypes/postType';
import { authorType } from './schemaTypes/authorType';
import { expertisesType } from './schemaTypes/expertiseType';
import { formType } from './schemaTypes/formType';
import { heroType } from './schemaTypes/heroType';
import { imageGalleryType } from './schemaTypes/imageGalleryType';
import { pageType } from './schemaTypes/pageType';
import { projectType } from './schemaTypes/projectType';
import { promotionType } from './schemaTypes/promotionType';
import { textWithIllustrationType } from './schemaTypes/textWithIllustrationType';
import { sectionImageOverlay } from './schemaTypes/sectionImageOverlay';
import { videoType } from './schemaTypes/videoType';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, expertisesType, formType, heroType, imageGalleryType, pageType, projectType, promotionType, textWithIllustrationType, videoType, sectionImageOverlay],
}
