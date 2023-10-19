import React, { memo } from 'react';
import { IonItem, IonLabel, IonNote } from '@ionic/react';
import { getLogger } from '../core';
import { ItemProps } from './ItemProps';

const log = getLogger('Item');

interface ItemPropsExt extends ItemProps {
  onEdit: (id?: string) => void;
}

const Item: React.FC<ItemPropsExt> = ({ id, title, platform, authors, onEdit }) => {
  return (
    <IonItem onClick={() => onEdit(id)}>
      <IonNote style={{"width":"5vw"}}>{platform}</IonNote>
      <IonLabel><b>{title}</b> by <i>{authors.join(", ")}</i></IonLabel>
    </IonItem>
  );
};

export default memo(Item);
