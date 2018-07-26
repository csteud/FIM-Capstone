package com.fim.hose;

import javax.persistence.*;

/**
 * <code> Type </code> is the Class defining what a Hose is
 * @author Cory Steudeman
 * @version 0.1
 */
@Entity
public class Hose {

    @Id
    @GeneratedValue
    private Integer id;
    private String name;

    @ManyToOne()
    @JoinColumn(name = "type")
    private Type type;

    protected Hose() {

    }

    public Hose(Integer id, String name, Type type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Type getType() {
        return type;
    }

    public void setTypes(Type type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Hose{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
