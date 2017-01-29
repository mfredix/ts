/**
 * For details on how these interfaces work in Java:
 * http://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html
 * https://docs.oracle.com/javase/tutorial/collections/
 *
 */
namespace collections {

    /**
     * An interface for visiting each entry in a collection
     */
    export interface Iterator<E> {
        hasNext(): boolean;
        next(): E;
    }

    export interface Iterable<T> {
        iterator(): Iterator<T>;
    }

    /**
     * A bunch of objects
     */
    export interface Collection<E> extends Iterable<E> {

        size(): number;

        isEmpty(): boolean;

        contains(e: any): boolean;

        iterator(): Iterator<E>;

        toArray(): E[];

        add(e: E): boolean;

        remove(e: any): boolean;

        addAll(col: Collection<E>): boolean;

        removeAll(col: Collection<any>): boolean;

        containsAll(col: Collection<any>): boolean;

        retainAll(col: Collection<any>): boolean;

        clear(): void;

    }

    /**
     * A collection with set semantics
     */
    export interface Set<E> extends Collection<E> {
    }

    /**
     * A collection with indices
     */
    export interface List<E> extends Collection<E> {

        addAllAtIndex(index: number, col: Collection<E>): boolean;

        get(index: number): E;

        set(index: number, element: E): E;

        addAtIndex(index: number, element: E): void;

        removeAtIndex(index: number): E;

        indexOf(o: any): number;

        lastIndexOf(o: any): number;

        subList(fromIndex: number, toIndex: number): List<E>;

    }


    /**
     * A key value pair
     */
    export interface Entry<K,V> {

        getKey(): K;

        getValue(): V;
    }

    /**
     * A set of keys mapping to values
     */
    export interface Map<K,V> {

        size(): number;

        isEmpty(): number;

        containsKey(key: any): boolean;

        containsValue(value: any): number;

        get(key: any): V;

        put(key: K, value: V): V;

        remove(key: any): V;

        putAll(map: Map<K, V>): void;

        clear(): void;

        keySet(): Set<K>;

        values(): Collection<V> ;

        entrySet(): Set<Entry<K, V>> ;

    }


    // Put your implementations below.
    // You can even put some code here to try your implementations, run it by
    // node collections.js
    // or:
    // nodejs collections.js
    // depending on system
    console.log('Hi from collections namespace!');

    // For your collections classes, maybe something like:
    //
    //export class ArrayList<E> implements List<E> {
    //}

}
