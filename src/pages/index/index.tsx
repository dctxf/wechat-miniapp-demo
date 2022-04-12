import { View, Text, Button } from '@tarojs/components';
import { useOpenId } from 'src/hooks/useOpenId';

import './index.less';

export default () => {
  const { session } = useOpenId();
  console.log(session);

  return (
    <View className="index">
      <View>
        <Text>Hello, World</Text>
      </View>
      <Button onClick={() => {}}>授权</Button>
    </View>
  );
};
