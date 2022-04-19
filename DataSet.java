public class DataSet{
    public class static Set{

        private int size =0;

        private String[] array = new String[10];

        public boolean add(String value){
            if(contains(value)){
                return false;
            }
            ensureCapacity();
            array[size] = value;
            size++;   
            return true;
        }

        private void ensureCapacity(){
            if(size >= array.length){
                String[] temp = new String[array.length *2];
                for(int i =0; i < array.length;i++){
                    temp[i] = array[i];
                }
                array = temp;
            }
        }

        public boolean contains(String value){
            for(String item :array){
                if(value.equals(item)){
                    return false;
                }
            }
            return true;
        }

        public int size(){
            return size;
        }

        private int indexOf(String value ){
            for(int i = 0; i < array.length; i++){
                if(value.equals(array[i])){
                    return i;
                }
            }
            return -1;
        }

        public boolean remove(String value){
            if(contains(value)){
                int indexRemoved = indexOf(value);
                for(int i = indexRemoved; i <= size; i++){
                    array[i] = array[i+1]; 
                }
                size--;
                return true;
            }
            return false;
        }

    }

    @Test
    void testAdd(){
        Set set = new Set();
        Assertions.assertTrue(set.add("eko"));
        Assertions.assertFalse(set.add("eko"));
    }

    @Test
    void testContains(){
        Set set = new Set();
        set.add("eko");
        set.add("wesley")
        Assertions.assertTrue(set.contains("eko"));
        Assertions.assertFalse(set.contains("wesley"));
        Assertions.assertFalse(set.contains("wesleya"));
    }

    @Test
    void testSize(){
        Set set = new Set();
        set.add("eko");
        Assertions.assertEquals(1, set.size());
        set.add("eko");
        Assertions.assertEquals(1, set.size());

        set.add("wesley")
        Assertions.assertEquals(2, set.size());
    }
}