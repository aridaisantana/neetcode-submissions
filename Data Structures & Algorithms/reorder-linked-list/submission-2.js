class Solution {
    reorderList(head) {
        if (!head || !head.next || !head.next.next) return;

        let current = head;

        while (current.next && current.next.next) {
            // Buscar el penúltimo nodo
            let traverse = current;

            while (traverse.next.next) {
                traverse = traverse.next;
            }

            // Guardar el segundo nodo que queremos conservar
            const second = current.next;

            // Guardar el último nodo
            const tail = traverse.next;

            // Desconectar el último nodo
            traverse.next = null;

            // Insertar el último nodo después de current
            current.next = tail;
            tail.next = second;

            // Continuar con el nodo que iba después de current
            current = second;
        }
    }
}