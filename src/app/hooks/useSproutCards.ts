import useLocalStorage from './useLocalStorage';
import type { Sprout } from '../../types';

export default function useSproutCards(): {
  sprouts: Sprout[];
  addCard: (sprout: Sprout) => void;
  removeCard: (newSprout: Sprout) => void;
  editCard: (newSprout: Sprout) => void;
} {
  const [sprouts, setSprouts] = useLocalStorage<Sprout[]>('sprouts', []);

  function addCard(sprout: Sprout) {
    setSprouts([...sprouts, sprout]);
  }

  function removeCard(newSprout: Sprout) {
    setSprouts(sprouts.filter((sprout) => sprout !== newSprout));
  }

  function editCard(newSprout: Sprout) {
    setSprouts([
      ...sprouts.filter((sprout) => sprout.id !== newSprout.id),
      newSprout,
    ]);
  }
  return { sprouts, addCard, removeCard, editCard };
}
