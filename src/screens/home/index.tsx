
import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';

import styles from './home.module.scss'



const HomeScreen = () => (
  <div>
    <div className={styles.add__block}>
      <Input />
      <Button>Add</Button>
    </div>
  </div>
);

export default HomeScreen;
